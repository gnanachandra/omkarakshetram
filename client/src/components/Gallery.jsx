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
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};
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
      <div className="hidden md:block">
        <div className="grid md:grid-cols-3 p-4 md:p-8 gap-4">
          {images.map((image, index) => {
            return (
              <div key={index}>
                <img
                  className="h-auto max-w-full rounded-lg scale-95"
                  src={image}
                  alt="gallery image"
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* gallery for small devices */}
      <div className="block md:hidden mx-3 mt-3 rounded-lg ">
        <Splide
          options={{
            rewind: true,
            speed: "1000",
            arrows: false,
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
