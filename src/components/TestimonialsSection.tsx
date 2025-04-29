import { Carousel } from "antd";

const TestimonialsSection = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="py-10 max-w-7xl mx-auto">
        {" "}
        {/* Reduced py-14 to py-10 */}
        <h2 className="text-5xl font-semibold text-center mb-8">
          {" "}
          {/* Reduced mb-12 to mb-8 */}
          Testimonials
        </h2>
        <div className="text-center max-w-7xl mx-auto ">
          <Carousel
            autoplay
            autoplaySpeed={2500}
            dots={false}
            slidesToShow={3}
            swipeToSlide
            className="m-4"
          >
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="shadow-lg p-4 rounded-lg bg-white !w-fit !text-center flex flex-col !items-center !justify-center gap-4 m-6"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={`https://picsum.photos/100?random=${i}`}
                    alt={`Random ${i}`}
                    className="mb-3 rounded-full w-16 h-16 object-cover"
                  />
                  {/* Reduced mb-4 to mb-3 */}
                  <div className="flex mb-1">
                    {Array(5)
                      .fill(0)
                      .map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className="text-yellow-500 text-3xl"
                        >
                          ★
                        </span>
                      ))}
                  </div>
                  <p className="text-gray-600 italic mb-3 text-lg">
                    Simply put, I can confidently recommend Nexcel Solution’s
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
