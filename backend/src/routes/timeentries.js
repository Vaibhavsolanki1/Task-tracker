import express from 'express';
import {
  createTimeEntry,
  getAllTimeEntries,
  getEntriesByDateRange,
  getDailyTotal,
  updateTimeEntry,
  deleteTimeEntry
} from '../controllers/timeEntryController.js';

const router = express.Router();

router.post('/', createTimeEntry);
router.get('/', getAllTimeEntries);
router.get('/range', getEntriesByDateRange);
router.get('/daily-total', getDailyTotal);
router.put('/:id', updateTimeEntry);
router.delete('/:id', deleteTimeEntry);

export default router;
