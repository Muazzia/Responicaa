import { Carousel } from "antd";

export const RecognizedByBest = () => {
  return (
    <>
      <div className="text-center flex flex-col gap-4 md:gap-10 px-4">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Recognized by the best
        </h1>
        <p className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto">
          We stands out for its exceptional expertise and proven track record of
          providing quality services catering to precise business needs.
        </p>
      </div>
      <div className="text-center px-4">
        <Carousel
          autoplay
          autoplaySpeed={2000}
          dots={false}
          slidesToShow={5}
          draggable
          swipeToSlide
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
        >
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 md:gap-4 items-center justify-center p-2 md:p-4"
            >
              <img
                src="/images/landingPage/pc.png"
                alt="Industry"
                className="hover:scale-110 transition-transform mx-auto w-16 md:w-20 lg:w-24 xl:w-32"
              />
              <p className="text-xs md:text-sm font-medium">
                Education & E-Learning
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};
