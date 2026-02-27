import mongoose from 'mongoose';

const timeEntrySchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      default: Date.now
    },
    durationMinutes: {
      type: Number,
      required: true,
      min: 1
    },
    category: {
      type: String,
      required: true,
      enum: ['Web Dev', 'DSA', 'Python', 'College', 'Travel Learning', 'Projects']
    },
    notes: {
      type: String,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

export default mongoose.model('TimeEntry', timeEntrySchema);
