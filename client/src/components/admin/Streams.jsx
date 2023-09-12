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
import { useEffect, useState } from "react";
import AddStream from "./AddStream";
import UpdateStream from "./UpdateStream";
import { useDispatch, useSelector } from "react-redux";
import { deleteStream, getStreams, setStream } from "../../redux/streamSlice";
import { formatDate, formatTime } from "../../utils/format";
import Loading from "../Loading";

const Streams = () => {
  const dispatch = useDispatch();
  const { streams, isLoading } = useSelector((state) => state["stream"]);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpenEdit = () => {
    setOpenEdit(!openEdit);
  };
  useEffect(() => {
    dispatch(getStreams());
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-4 md:px-8">
      {/* Heading and add stream button */}
      <div className="flex justify-between items-center">
        <Typography as="h2" className="font-bold text-xl">
          Live Streams
        </Typography>
        <Button
          className="flex items-center gap-2 hover:shadow-sm bg-blue-500 text-white"
          size="sm"
          onClick={handleOpen}
        >
          <PlusIcon className="h-6 w-6" />
          Add Stream
        </Button>
      </div>
      {/* Streams div */}
      <div className="mt-5">
        {/* Streams in the form of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {streams?.map((stream, index) => {
            return (
              <Card key={index} className="flex justify-between">
                <CardHeader
                  floated={false}
                  shadow={false}
                  className="text-black rounded-none"
                >
                  <div className="flex items-center justify-between">
                    <Typography as="h2" className="font-semibold">
                      {stream.name}
                    </Typography>
                    <div className="flex items-center justify-between gap-2">
                      <PencilSquareIcon
                        className="h-6 w-6 cursor-pointer"
                        onClick={() => {
                          dispatch(setStream({ id: stream._id }));
                          handleOpenEdit();
                        }}
                      />
                      <TrashIcon
                        className="h-6 w-6 hover:text-red-500 cursor-pointer"
                        onClick={() =>
                          dispatch(deleteStream({ id: stream._id }))
                        }
                      />
                    </div>
                  </div>
                  <Typography as="p" className="font-medium mt-3">
                    <p
                      className="cursor-pointer hover:underline"
                      onClick={() => (window.location.href = stream.link)}
                    >
                      {stream.link}
                    </p>
                  </Typography>
                </CardHeader>
                <CardBody className="text-black pl-4 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-6 w-6" />
                    {formatDate(stream.date)}
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-6 w-6" />
                    {formatTime(stream.startTime)} to {formatTime(stream.endTime)}
                  </div>
                  
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
      <AddStream open={open} handleOpen={handleOpen} />
      <UpdateStream open={openEdit} handleOpen={handleOpenEdit} />
    </div>
  );
};

export default Streams;
