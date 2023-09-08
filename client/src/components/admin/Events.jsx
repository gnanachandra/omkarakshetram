import {
  CalendarIcon,
  ClockIcon,
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import eventsData from "../../data/fakeData";
import { useState } from "react";
import AddEvent from "./AddEvent";
import UpdateEvent from "./UpdateEvent";

const Events = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpenEdit = () => {
    setOpenEdit(!openEdit);
  };
  return (
    <div className="p-4 md:px-8">
      {/* Heading and add event button */}
      <div className="flex justify-between items-center">
        <Typography as="h2" className="font-bold text-xl">
          Temple Events
        </Typography>
        <Button
          className="flex items-center gap-2 hover:shadow-sm"
          size="sm"
          onClick={handleOpen}
        >
          <PlusIcon className="h-6 w-6" />
          Add Event
        </Button>
      </div>
      {/* Events div */}
      <div className="mt-5">
        {/* upcoming events div */}
        <div>
          <Typography as="h2" className="font-semibold text-lg">
            Upcoming Events
          </Typography>
          {/* Events in the form of cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {eventsData.map((event, index) => {
              return (
                <Card key={index} className="flex justify-between">
                  <CardHeader
                    floated={false}
                    shadow={false}
                    className="text-black rounded-none"
                  >
                    <div className="flex items-center justify-between">
                      <Typography as="h2" className="font-semibold">
                        {event.name}
                      </Typography>
                      <div className="flex items-center justify-between gap-2">
                        <PencilSquareIcon className="h-6 w-6 cursor-pointer" onClick={handleOpenEdit} />
                        <TrashIcon className="h-6 w-6 hover:text-red-500 cursor-pointer" />
                      </div>
                    </div>
                    <Typography as="p" className="font-medium mt-3">
                      {event.description}
                    </Typography>
                  </CardHeader>
                  <CardBody className="text-black pl-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-6 w-6" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-6 w-6" />
                      {event.time}
                    </div>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div>
        {/* past events div */}
        <div></div>
      </div>
      <AddEvent open={open} handleOpen={handleOpen} />
      <UpdateEvent open={openEdit} handleOpen={handleOpenEdit} />
    </div>
  );
};

export default Events;
