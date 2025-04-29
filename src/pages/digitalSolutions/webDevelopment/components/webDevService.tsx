const WebDevService = ({ imageUrl = "", title = "", description = "" }) => {
  return (
    <div className="px-4 py-4 border-[#c0b1b1ba] border-[1px] rounded-sm">
      <div className="flex flex-col items-center gap-2 mb-4">
        <img
          src={`/images/digitalSolutions/${imageUrl}.png`}
          alt="image"
          className="w-14 h-14 object-cover"
        />
        <p className="text-2xl font-semibold">{title}</p>
      </div>
      <p className="text-black/60">{description}</p>
    </div>
  );
};

export default WebDevService;
