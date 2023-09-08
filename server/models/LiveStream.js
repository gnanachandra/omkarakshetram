import mongoose from "mongoose";

const LiveStream = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Live Stream name is required"],
    },
    date: {
      type: Date,
      required: [true, "Live Stream Date is required"],
      validate: {
        validator: function (date) {
          return date >= new Date();
        },
        message: "Past Dates are not allowed",
      },
    },
    startTime: {
      type: Date,
      required: [true, "Live stream start time is required"],
      validate: {
        validator: function (startTime) {
          return startTime > new Date();
        },
        message: "Start time must be in the future",
      },
    },
    endTime: {
      type: Date,
      required: [true, "Live stream End time is required"],
      validate: {
        validator: function (endTime) {
          return this.startTime < endTime && endTime > new Date();
        },
        message: "End time must be after start time and in the future",
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("LiveStream", LiveStream);
