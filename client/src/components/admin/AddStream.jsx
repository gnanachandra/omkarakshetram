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
    console.log(`data :`,data);
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
        className="h-[28rem] overflow-auto"
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
                  message: "Event name is required",
                },
              })}
            />
            <input
              type="text"
              name="link"
              placeholder="Event Link"
              className="p-2 rounded-md border border-gray-700 w-full text-black"
              {...register("link", {
                required: {
                  value: true,
                  message: "Event link is required",
                }
              })}
            />
            <input
              type="date"
              name="date"
              placeholder="Select event date"
              className="p-2 rounded-md border border-gray-700 w-full text-black"
              {...register("date", {
                valueAsDate: true,
                required: {
                  value: true,
                  message: "Event date is required",
                },
                
              })}
            />
            <input
              type="time"
              name="startTime"
              placeholder="Select event start time"
              className="p-2 rounded-md border border-gray-700 w-full text-black"
              {...register("startTime", {
                required: {
                  value: true,
                  message: "Event start time is required",
                }
              })}
            />
            <input
              type="time"
              name="endTime"
              placeholder="Select event end time"
              className="p-2 rounded-md border border-gray-700 w-full text-black"
              {...register("endTime", {
                required: {
                  value: true,
                  message: "Event end time is required",
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
