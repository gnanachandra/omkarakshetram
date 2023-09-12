import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";
import { formatTime } from "../utils/format";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const HomePageEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("/api/event");
      setEvents(response.data.events);
    };
    getUsers();
  }, []);
  console.log(events);
  return (
    <div id="temples" className="p-4 md:px-8">
      <h2 className="font-Telugu text-center font-semibold text-2xl lg:text-3xl text-heading mb-4">
        Upcoming Events
      </h2>
      <div>
        <Splide
          options={{
            speed: "2000",
            arrows: true,
            interval: 2000,
            autoplay: true,
            perPage: 3,
            perMove: 1,
            gap: 20,
          }}
          aria-label="React Splide"
          data-splide-interval="1000"
        >
          {events.map((event, index) => {
            return (
              <SplideSlide key={index}>
                <Card className="cursor-pointer">
                  <CardBody className="text-black flex flex-col gap-3">
                    <Typography as="h2" className="text-lg font-bold">
                      {event.name}
                    </Typography>
                    <Typography as="p" className="text-lg font-bold">
                      {event.description}
                    </Typography>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CalendarDaysIcon className="h-6 w-6" />
                        {event.date.split("T")[0]}
                      </div>
                      <div className="flex items-center gap-3">
                        <ClockIcon className="h-6 w-6" />
                        {formatTime(event.time)}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default HomePageEvents;
