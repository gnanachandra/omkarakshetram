import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import data from "../data/templesData";
import Temple from "./Temple";

const Temples = () => {
  const [open, setOpen] = useState(false);
  const [templeId, setTempleId] = useState(1);
  const handleOpen = (id) => {
    setOpen(!open);
    setTempleId(id);
  };
  return (
    <div id="temples">
      <h2 className="font-Telugu text-center font-semibold text-2xl lg:text-3xl text-heading">
        మరిన్ని దేవాలయాలు
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 md:px-10 mt-2">
        {data.map((temple, index) => {
          return (
            <Card className="" key={index}>
              <CardHeader shadow={false} floated={false}>
                <img
                  src="./herosection/mobile/hero-1.webp"
                  alt="TempleImage"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <div className="mb-2 flex items-center justify-between">
                  <Typography className="font-bold text-black">
                    {temple.name}
                  </Typography>
                </div>
                <Typography
                  variant="small"
                  className="font-normal text-gray-800"
                >
                  {temple.description.split(" ").slice(0, 25).join(" ")}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  ripple={false}
                  fullWidth={true}
                  className="bg-deep-orange-500 w-fit hover:bg-deep-orange-600 shadow-none  hover:shadow-none focus:shadow-none active:scale-100"
                  onClick={() => handleOpen(index)}
                >
                  More Details
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <Temple open={open} handleOpen={handleOpen} templeId={templeId} />
    </div>
  );
};

export default Temples;
