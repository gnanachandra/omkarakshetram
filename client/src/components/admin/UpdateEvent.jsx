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
import { updateEvent } from "../../redux/eventSlice";

const UpdateEvent = ({ open, handleOpen }) => {
  const { event } = useSelector((state) => state["event"]);
  
  const dispatch = useDispatch();
  const form = useForm();

  const { register, formState, handleSubmit } = form;
  const { errors } = formState;
  const errorKeys = Object.keys(errors);

  if (errorKeys.length > 0) {
    const message = errors[errorKeys[0]].message;
    toast.error(message);
  }

  const handleEditEvent = async (data) => {
    data["id"] = event._id;
    const response = await dispatch(updateEvent(data));
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
            onSubmit={handleSubmit(handleEditEvent)}
          >
            <input
              type="text"
              defaultValue={event?.name}
              name="name"
              placeholder="Event Name"
              className="p-2 rounded-md border border-gray-700 w-full text-black"
              {...register("name", {
                required: {
                  value: true,
                  message: "Event name is required",
                },
              })}
            />
            <textarea
              rows={4}
              type="text"
              defaultValue={event?.description}
              name="description"
              placeholder="Description"
              className="p-2 rounded-md border border-gray-700 w-full text-black"
              {...register("description", {
                required: {
                  value: true,
                  message: "Event description is required",
                },
              })}
            />
            <input
              type="datetime-local"
              name="date"
              defaultValue={
                event?.date
                  ? new Date(event.date).toISOString().slice(0, 16)
                  : ""
              }
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

            <div className="flex items-center justify-between">
              <Button
                onClick={handleOpen}
                variant="outlined"
                className="border-red-500 text-red-500 w-fit"
              >
                Cancel
              </Button>

              <Button type="submit" color="green">
                Add Event
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default UpdateEvent;
