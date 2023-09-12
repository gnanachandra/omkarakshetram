import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Event name is required"],
    },
    description: {
      type: String,
      required: [true, "Event Description is required"],
    },
    date: {
      type: Date,
      required: [true, "Live Date is required"],
      validate: {
        validator: function (date) {
          return date >= new Date();
        },
        message: "Past Dates are not allowed",
      },
    },
    time : {
      type : String,
      required : [true, "Event time is required !"]
    }
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", EventSchema);

export default Event;
