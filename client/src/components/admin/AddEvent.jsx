import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import React from "react";

const AddEvent = ({ open, handleOpen }) => {
  return (
    <div>
      <Dialog
        open={open}
        handler={handleOpen}
        size="xs"
        dismiss={{outsidePress:false}}
        className="h-[30rem] overflow-auto"
      >
        <DialogHeader>Add Event Details</DialogHeader>
        <DialogBody divider>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Event Name"
              className="p-2 rounded-md border border-gray-700 w-full text-black"
            />
            <textarea
              rows={4}
              type="text"
              name="description"
              placeholder="Description"
              className="p-2 rounded-md border border-gray-700 w-full text-black"
            />
            <input
              type="date"
              name="date"
              placeholder="Event Date"
              className="p-2 rounded-md border border-gray-700 w-full text-black"
            />
            <input
              type="time"
              name="time"
              placeholder="24hr format"
              className="p-2 rounded-md border border-gray-700 w-full text-black"
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

export default AddEvent;
