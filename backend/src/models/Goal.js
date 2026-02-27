import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    category: {
      type: String,
      required: true,
      enum: ['Web Dev', 'DSA', 'Python', 'College', 'Travel Learning', 'Projects']
    },
    deadline: {
      type: Date,
      required: true
    },
    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100
    },
    status: {
      type: String,
      default: 'active',
      enum: ['active', 'completed', 'paused', 'abandoned']
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

export default mongoose.model('Goal', goalSchema);
