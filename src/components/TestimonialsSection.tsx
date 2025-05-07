import { Carousel } from "antd";

const testimonialData = [
  {
    id: 1,
    name: "Michael Johnson",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Simply put, I can confidently recommend Responica Solution's App development services. The commitment to excellence was evident from the moment the conversation started right to the end.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Working with Responica was the best decision for our business. Their team delivered our mobile app ahead of schedule with all the features we needed. Their support after launch has been exceptional.",
  },
  {
    id: 3,
    name: "David Chen",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    text: "Responica transformed our digital presence completely. Their attention to detail, technical expertise, and responsive communication made the development process smooth and enjoyable. Highly recommended!",
  },
];

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
            className="m-2 md:m-4"
          >
            {testimonialData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="shadow-lg p-4 rounded-lg bg-white !w-fit !text-center flex flex-col !items-center !justify-center gap-4 m-2 md:m-6 "
              >
                <div className="flex flex-col items-center">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s avatar`}
                    className="mb-3 rounded-full w-16 h-16 object-cover"
                  />
                  <div className="flex mb-1">
                    {Array(testimonial.rating)
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
                    {testimonial.text}
                  </p>
                  <p className="font-semibold">{testimonial.name}</p>
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
