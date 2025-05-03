import { Carousel } from "antd";

const TestimonialsSection = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden px-4 md:px-10">
      <div className="py-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-6 md:mb-8">
          Testimonials
        </h2>
        <div className="text-center max-w-7xl mx-auto">
          <Carousel
            autoplay
            autoplaySpeed={2500}
            dots={false}
            slidesToShow={3}
            swipeToSlide
            // responsive={[
            //   {
            //     breakpoint: 1024,
            //     settings: {
            //       slidesToShow: 2,
            //     },
            //   },
            //   {
            //     breakpoint: 768,
            //     settings: {
            //       slidesToShow: 3,
            //     },
            //   },
            // ]}
            className="m-2 md:m-4"
          >
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="shadow-lg p-4 rounded-lg bg-white !w-fit !text-center flex flex-col !items-center !justify-center gap-4 m-2 md:m-6"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={`https://picsum.photos/100?random=${i}`}
                    alt={`Random ${i}`}
                    className="mb-3 rounded-full w-16 h-16 object-cover"
                  />
                  <div className="flex mb-1">
                    {Array(5)
                      .fill(0)
                      .map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className="text-yellow-500 text-2xl md:text-3xl"
                        >
                          ★
                        </span>
                      ))}
                  </div>
                  <p className="text-gray-600 italic mb-3 text-base md:text-lg px-2">
                    Simply put, I can confidently recommend Responica Solution's
                    App development services. The commitment to excellence was
                    evident from the moment the conversation started right to
                    the end.
                  </p>
                  <p className="font-semibold">Michael</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
