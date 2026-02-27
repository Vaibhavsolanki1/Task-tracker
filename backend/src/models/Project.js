import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    status: {
      type: String,
      default: 'in-progress',
      enum: ['planning', 'in-progress', 'on-hold', 'completed', 'abandoned']
    },
    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100
    },
    lastWorkedDate: {
      type: Date,
      default: Date.now
    },
    notes: {
      type: String,
      trim: true
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

export default mongoose.model('Project', projectSchema);
