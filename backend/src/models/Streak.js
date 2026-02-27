import mongoose from 'mongoose';

const streakSchema = new mongoose.Schema(
  {
    currentStreak: {
      type: Number,
      default: 0
    },
    longestStreak: {
      type: Number,
      default: 0
    },
    lastActivityDate: {
      type: Date,
      default: null
    },
    streakStartDate: {
      type: Date,
      default: Date.now
    },
    weeklyStreak: {
      type: Array,
      default: [false, false, false, false, false, false, false]
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

export default mongoose.model('Streak', streakSchema);
