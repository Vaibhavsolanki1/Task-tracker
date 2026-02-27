import TimeEntry from '../models/TimeEntry.js';

// Create a new time entry
export const createTimeEntry = async (req, res) => {
  try {
    const { date, durationMinutes, category, notes } = req.body;

    const timeEntry = new TimeEntry({
      date: date || Date.now(),
      durationMinutes,
      category,
      notes
    });

    const savedEntry = await timeEntry.save();
    res.status(201).json(savedEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all time entries
export const getAllTimeEntries = async (req, res) => {
  try {
    const entries = await TimeEntry.find().sort({ date: -1 });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get time entries by date range
export const getEntriesByDateRange = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const entries = await TimeEntry.find({
      date: {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      }
    }).sort({ date: -1 });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get daily total
export const getDailyTotal = async (req, res) => {
  try {
    const { date } = req.query;
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const entries = await TimeEntry.find({
      date: { $gte: startOfDay, $lte: endOfDay }
    });

    const total = entries.reduce((sum, entry) => sum + entry.durationMinutes, 0);
    res.json({ date, totalMinutes: total, totalHours: total / 60 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a time entry
export const updateTimeEntry = async (req, res) => {
  try {
    const entry = await TimeEntry.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: 'Time entry not found' });
    }

    Object.assign(entry, req.body);
    const updatedEntry = await entry.save();
    res.json(updatedEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a time entry
export const deleteTimeEntry = async (req, res) => {
  try {
    const entry = await TimeEntry.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: 'Time entry not found' });
    }

    await TimeEntry.deleteOne({ _id: req.params.id });
    res.json({ message: 'Time entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
