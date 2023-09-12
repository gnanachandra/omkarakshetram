import mongoose from "mongoose";

const LiveStream = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Live Stream name is required"],
    },
    link: {
      type: String,
      required: [true, "Live Stream link is required"],
    },
    date: {
      type: Date,
      required: [true, "Live Stream link is required"],
    },
    startTime: {
      type: String,
      required: [true, "Live stream start time is required"],
    },
    endTime: {
      type: String,
      required: [true, "Live stream End time is required"],
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("LiveStream", LiveStream);
