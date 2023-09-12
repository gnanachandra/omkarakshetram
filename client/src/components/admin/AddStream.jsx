/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import Loading from "../Loading";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { createStream } from "./../../redux/streamSlice";
const AddStream = ({ open, handleOpen }) => {
  const { streams, isLoading } = useSelector((state) => state["stream"]);
  const dispatch = useDispatch();

  const form = useForm();
  const { register, formState, handleSubmit } = form;
  const { errors } = formState;
  const errorKeys = Object.keys(errors);

  if (errorKeys.length > 0) {
    const message = errors[errorKeys[0]].message;
    toast.error(message);
  }

  const handleAddStream = async (data) => {
    console.log(data);
    const response = await dispatch(createStream(data));
    console.log(response);
    if (response.meta.requestStatus === "fulfilled") {
      handleOpen();
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Dialog
        open={open}
        handler={handleOpen}
        size="xs"
        dismiss={{ outsidePress: false }}
        className="h-[26rem] overflow-auto"
      >
        <DialogHeader>Add Stream Details</DialogHeader>
        <DialogBody divider>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleAddStream)}
          >
            <input
              type="text"
              name="name"
              placeholder="Stream Name"
              className="p-2 rounded-md border border-gray-700 w-full text-black"
              {...register("name", {
                required: {
                  value: true,
                  message: "Stream name is required",
                },
              })}
            />
            <input
              type="datetime-local"
              name="date"
              placeholder="Event Date"
              className="p-2 rounded-md border border-gray-700 w-full text-black"
              {...register("date", {
                valueAsDate: true,
                required: {
                  value: true,
                  message: "Event date is required",
                },
                validate: {
                  isvalidDate: (fieldValue) => {
                    return fieldValue >= new Date() || "Enter a valid date";
                  },
                },
              })}
            />
            <input
              type="datetime-local"
              name="startTime"
              placeholder="Select event start time"
              className="p-2 rounded-md border border-gray-700 w-full text-black"
              {...register("startTime", {
                valueAsDate: true,
                required: {
                  value: true,
                  message: "Event start time is required",
                },
                validate: {
                  isValidTime: (fieldValue) => {
                    const selectedTime = fieldValue.getTime();
                    const currentTime = new Date().getTime();
                    return selectedTime >= currentTime || "Enter a valid start time";
                  },
                }
              })}
            />

            <input
              type="datetime-local"
              name="endTime"
              placeholder="Select event end time"
              className="p-2 rounded-md border border-gray-700 w-full text-black"
              {...register("endTime", {
                valueAsDate: true,
                required: {
                  value: true,
                  message: "Event end time is required",
                },
                validate: {
                  isEndTimeValid: (endTimeValue) => {
                    const startTimeValue = new Date(
                      document.querySelector('input[name="startTime"]').value
                    );

                    if (startTimeValue && endTimeValue) {
                      return (
                        endTimeValue > startTimeValue ||
                        "End time must be greater than start time"
                      );
                    }

                    return true; // If either value is not available, skip validation.
                  },
                },
              })}
            />

            <div className="flex items-center justify-between">
              <Button
                onClick={handleOpen}
                variant="outlined"
                className="border-red-500 text-red-500 w-fit"
              >
                Cancel
              </Button>

              <Button type="submit" color="green">
                Add Stream
              </Button>
            </div>
          </form>
        </DialogBody>
        <Toaster position="top-right" />
      </Dialog>
    </div>
  );
};

export default AddStream;
