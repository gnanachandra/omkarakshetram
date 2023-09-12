/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { updateStream } from "./../../redux/streamSlice";

const UpdateStream = ({ open, handleOpen }) => {
  const { stream } = useSelector((state) => state["stream"]);

  const dispatch = useDispatch();
  const form = useForm();

  const { register, formState, handleSubmit } = form;
  const { errors } = formState;
  const errorKeys = Object.keys(errors);

  if (errorKeys.length > 0) {
    const message = errors[errorKeys[0]].message;
    toast.error(message);
  }

  const handleEditStream = async (data) => {
    data["id"] = stream._id;
    const response = await dispatch(updateStream(data));
    if (response.meta.requestStatus === "fulfilled") {
      handleOpen();
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        handler={handleOpen}
        size="xs"
        dismiss={{ outsidePress: false }}
        className="h-[26rem] overflow-auto"
      >
        <DialogHeader>Update Details</DialogHeader>
        <DialogBody divider>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleEditStream)}
          >
            <input
              type="text"
              defaultValue={stream?.name}
              name="name"
              placeholder="Stream Name"
              className="p-2 rounded-md border border-gray-700 w-full text-black"
              {...register("name", {
                required: {
                  value: true,
                  message: "Event name is required",
                },
              })}
            />
            <input
              type="datetime-local"
              name="date"
              defaultValue={
                stream?.date
                  ? new Date(stream.date).toISOString().slice(0, 16)
                  : ""
              }
              placeholder="Stream Date"
              className="p-2 rounded-md border border-gray-700 w-full text-black"
              {...register("date", {
                valueAsDate: true,
                required: {
                  value: true,
                  message: "Stream date is required",
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
              defaultValue={
                stream?.startTime
                  ? new Date(stream.startTime).toISOString().slice(0, 16)
                  : ""
              }
              name="startTime"
              placeholder="Start Time"
              className="p-2 rounded-md border border-gray-700 w-full text-black"
              {...register("startTime", {
                valueAsDate: true,
                required: {
                  value: true,
                  message: "Start time is required",
                },
              })}
            />
            <input
              type="datetime-local"
              defaultValue={
                stream?.endTime
                  ? new Date(stream.endTime).toISOString().slice(0, 16)
                  : ""
              }
              name="endTime"
              placeholder="End Time"
              className="p-2 rounded-md border border-gray-700 w-full text-black"
              {...register("endTime", {
                valueAsDate: true,
                required: {
                  value: true,
                  message: "End time is required",
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
                Update Event
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default UpdateStream;
