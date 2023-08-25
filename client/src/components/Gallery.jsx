const images = [
  "/gallery/gallery-1.webp",
  "/gallery/gallery-2.webp",
  "/gallery/gallery-3.webp",
  "/gallery/gallery-4.webp",
  "/gallery/gallery-5.webp",
  "/gallery/gallery-6.webp",
  "/gallery/gallery-7.webp",
  "/gallery/gallery-8.webp",
  "/gallery/gallery-9.webp",
];
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// eslint-disable-next-line react/prop-types
const Gallery = () => {
  return (
    <div className="px-4 md:px-10 " id="gallery">
      <p className="font-Telugu text-center font-semibold text-3xl text-heading">
        గ్యాలరీ
      </p>

      {/* gallery for laptop and tablets */}
      <div className="hidden md:block mt-1">
        <Splide
          options={{
            rewind: true,
            speed: "1000",
            arrows: true,
            interval: 2000,
            autoplay: true,
            type: "loop",
            perPage: 3,
            perMove: 1,
            gap: 20,
          }}
          aria-label="React Splide"
          data-splide-interval="1000"
        >
          {images.map((image, index) => {
            return (
              <SplideSlide key={index}>
                <img
                  src={image}
                  alt="Banner"
                  className="h-full w-full object-cover rounded-lg"
                />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      {/* gallery for small devices */}
      <div className="block md:hidden mx-3 mt-3 rounded-lg ">
        <Splide
          options={{
            rewind: true,
            speed: "1000",
            arrows: true,
            interval: 2000,
            autoplay: true,
          }}
          aria-label="React Splide"
          data-splide-interval="1000"
        >
          {images.map((image, index) => {
            return (
              <SplideSlide key={index}>
                <img
                  src={image}
                  alt="Banner"
                  className="h-full w-full object-cover rounded-lg"
                />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Gallery;
