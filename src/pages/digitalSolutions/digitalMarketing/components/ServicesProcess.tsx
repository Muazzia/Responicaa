interface Step {
  title: string;
  content: string;
}

export const ServiceProcess = ({ steps }: { steps: Step[] }) => {
  return (
    <div className="relative mt-8">
      <div className="hidden md:block absolute left-1/2 h-full border-2 border-blue-200"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative text-center p-6 bg-white rounded-lg shadow-md"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#004aad] text-white w-8 h-8 rounded-full flex items-center justify-center">
              {index + 1}
            </div>
            <h4 className="text-xl font-semibold text-[#004aad] mb-2">
              {step.title}
            </h4>
            <p className="text-gray-600 text-sm">{step.content}</p>
            {index !== steps.length - 1 && (
              <div className="md:hidden absolute -right-6 top-1/2 transform -translate-y-1/2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
