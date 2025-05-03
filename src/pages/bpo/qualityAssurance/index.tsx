import HeroSectionWithCTA from "../../../components/HeroSectionWithCTA";
import ImageWithServiceDetails from "../../../components/ImageWithServiceDetails";

const QualityAssurance = () => {
  const qualityAssuranceData = [
    {
      id: 1,
      title: "Ensuring Excellence",
      description:
        "Our Quality Assurance services focus on maintaining the highest standards in every aspect of your business processes. We ensure that your operations meet compliance, efficiency, and customer satisfaction benchmarks.",
    },
    {
      id: 2,
      title: "Proactive Monitoring",
      description:
        "We proactively monitor workflows, identify potential issues, and implement corrective measures to ensure seamless operations. Our team uses advanced tools and methodologies to maintain quality at every step.",
    },
    {
      id: 3,
      title: "Customer-Centric Approach",
      description:
        "Quality Assurance is not just about processes; it's about delivering exceptional customer experiences. We ensure that every interaction reflects your brand's commitment to excellence.",
    },
    {
      id: 4,
      title: "Continuous Improvement",
      description:
        "Through regular audits and feedback loops, we help businesses refine their processes and achieve continuous improvement. Our goal is to help you stay ahead in a competitive market.",
    },
  ];

  return (
    <div>
      <HeroSectionWithCTA
        primaryButtonLabel="Learn More"
        primaryButtonUrl="/contact"
        heading="Quality Assurance Services"
        description="At Nexcel Solutions, our Quality Assurance services are designed to ensure that your business processes meet the highest standards of excellence. We help you deliver consistent quality and build trust with your customers."
        secondaryButtonLabel="Get Started"
        secondaryButtonUrl="/contact"
      />

      <div className="max-w-7xl mx-auto mt-10">
        <div className="flex items-center justify-center">
          <p className="text-primary font-semibold text-[48px]">
            Why Choose Our Quality Assurance Services?
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          {qualityAssuranceData.map((item) => (
            <div key={item.id} className="space-y-4">
              <p className="text-[30px] font-semibold">{item.title}</p>
              <p className="text-black/60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16">
        <ImageWithServiceDetails
          data={qualityAssuranceData}
          imageUrl={""}
          label={""}
          description={""}
          imageClass={""}
        />
      </div>
    </div>
  );
};

export default QualityAssurance;
