
import SectionHeading from "../common/SectionHeading";
import { Rocket, Heart, Clock } from "lucide-react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => (
  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
    <div className="h-12 w-12 rounded-full bg-zest-green flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const MissionSection = () => {
  const values = [
    {
      icon: <Rocket className="h-6 w-6 text-zest-green-dark" />,
      title: "Purpose",
      description:
        "We aim to equip young people with practical life skills that build confidence and resilience for their future.",
    },
    {
      icon: <Heart className="h-6 w-6 text-zest-orange" />,
      title: "Passion",
      description:
        "We're dedicated to creating engaging learning experiences that inspire positive change in students' lives.",
    },
    {
      icon: <Clock className="h-6 w-6 text-zest-blue-dark" />,
      title: "Progress",
      description:
        "We believe in continuous improvement, both for our students and in our approaches to education.",
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionHeading
          title="Our Mission & Vision"
          subtitle="At Zest Life Training, we believe that life skills are just as important as academic knowledge. We're dedicated to helping students develop essential competencies to thrive in today's world."
          centered
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                To empower students with practical life skills through interactive
                seminars that prepare them for success in school, relationships, and
                the digital world.
              </p>
              <p className="text-gray-700">
                We create engaging learning experiences that build confidence,
                resilience, and personal responsibility in young people,
                complementing their academic education.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-700 mb-4">
                To be recognized as the leading provider of life skills education
                for schools across India, reaching students from all backgrounds and
                communities.
              </p>
              <p className="text-gray-700">
                We envision a future where every student has access to quality life
                skills education that enhances their wellbeing and prepares them for
                the challenges of modern life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
