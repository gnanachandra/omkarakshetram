import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const images = [
  "/herosection/hero-3.jpg",
  "/herosection/hero-2.jpg",
  "/herosection/hero-1.jpg",
  "/herosection/hero-4.jpg",
];

const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl pt-5">
      <div className="hidden md:block cursor-pointer mx-10">
        <Splide
          options={{
            rewind: true,
            speed: "1000",
            arrows: false,
            interval: 3000,
            autoplay: true,
          }}
          aria-label="React Splide"
          data-splide-interval="1000"
        >
          {images.map((image, index) => {
            return (
              <SplideSlide key={index}>
                <img className="h-full w-full object-cover" src={image} alt="Banner" />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <div className="block md:hidden mx-3 mt-1">
        <Splide
          options={{
            rewind: true,
            speed: "1000",
            arrows: false,
            
            interval: 3000,
            autoplay: true,
          }}
          aria-label="React Splide"
          data-splide-interval="1000"
        >
          {images.map((image, index) => {
            return (
              <SplideSlide key={index}>
                <img src={image} alt="Banner" className="h-full w-full object-cover" />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Hero;