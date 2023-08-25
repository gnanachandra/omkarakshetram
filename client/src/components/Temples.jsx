import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const data = [
  {
    name: "Temple-1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur porro dolores blanditiis provident possimus sunt, nobis quisquam, odio inventore perferendis, adipisci soluta laboriosam tempora nostrum distinctio deleniti sequi minima cumque?",
    image: "/temples/temple-1.jpg",
  },
  {
    name: "Temple-2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur porro dolores blanditiis provident possimus sunt, nobis quisquam, odio inventore perferendis, adipisci soluta laboriosam tempora nostrum distinctio deleniti sequi minima cumque?",
    image: "/temples/temple-2.jpg",
  },
  {
    name: "Temple-3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur porro dolores blanditiis provident possimus sunt, nobis quisquam, odio inventore perferendis, adipisci soluta laboriosam tempora nostrum distinctio deleniti sequi minima cumque?",
    image: "/temples/temple-3.jpg",
  },
  {
    name: "Temple-4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur porro dolores blanditiis provident possimus sunt, nobis quisquam, odio inventore perferendis, adipisci soluta laboriosam tempora nostrum distinctio deleniti sequi minima cumque?",
    image: "/temples/temple-4.jpg",
  },
  {
    name: "Temple-5",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur porro dolores blanditiis provident possimus sunt, nobis quisquam, odio inventore perferendis, adipisci soluta laboriosam tempora nostrum distinctio deleniti sequi minima cumque?",
    image: "/temples/temple-5.jpg",
  },
  {
    name: "Temple-6",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur porro dolores blanditiis provident possimus sunt, nobis quisquam, odio inventore perferendis, adipisci soluta laboriosam tempora nostrum distinctio deleniti sequi minima cumque?",
    image: "/temples/temple-6.jpg",
  },
];

const Temples = () => {
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
                  {temple.description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  ripple={false}
                  fullWidth={true}
                  className="bg-deep-orange-500 w-fit hover:bg-deep-orange-600 shadow-none  hover:shadow-none focus:shadow-none active:scale-100"
                >
                  More Details
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Temples;
