import { Carousel } from "antd";

const IndustriesSection = () => {
  return (
    <>
      <div className="text-center py-14 flex flex-col gap-4">
        <p className="text-3xl">Serving</p>
        <h1 className="text-5xl font-bold">INDUSTRIES</h1>
      </div>
      <div className="bg-[#eadeff] text-center ">
        <Carousel
          autoplay
          autoplaySpeed={2000}
          dots={false}
          slidesToShow={6}
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
              className="flex flex-col gap-4 items-center justify-center p-4"
            >
              <img
                src="/images/landingPage/pc.png"
                alt="Industry"
                width={100}
                height={100}
                className="hover:scale-110 transition-transform mx-auto"
              />
              <p className="text-sm font-medium">Education & E-Learning</p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default IndustriesSection;
