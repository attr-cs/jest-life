
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smile, Clock, Smartphone, Shield, Users } from "lucide-react";

interface SeminarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SeminarCard = ({ icon, title, description }: SeminarCardProps) => (
  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 flex-grow">{description}</p>
  </div>
);

const SeminarOverview = () => {
  const seminars = [
    {
      icon: <Smile className="h-8 w-8 text-zest-orange" />,
      title: "Happiness & Well-being",
      description:
        "Teaching students the science of happiness and practical strategies to improve mental well-being and maintain a positive outlook.",
    },
    {
      icon: <Clock className="h-8 w-8 text-zest-green-dark" />,
      title: "Effective Time Management",
      description:
        "Equipping students with techniques to prioritize tasks, set goals, and maintain a healthy balance between studies, extracurriculars, and personal time.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-zest-blue-dark" />,
      title: "Responsible Mobile Usage",
      description:
        "Helping students develop healthy habits around technology use and recognize the importance of digital wellness in their daily lives.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Digital & Personal Safety",
      description:
        "Educating students about online risks, privacy protection, and practices to stay safe both in digital environments and the real world.",
    },
    {
      icon: <Users className="h-8 w-8 text-zest-orange-light" />,
      title: "Building Meaningful Relationships",
      description:
        "Developing students' social skills, emotional intelligence, and ability to form healthy, supportive relationships with peers and adults.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          title="Our Seminar Offerings"
          subtitle="Engaging and interactive seminars designed to empower students with essential life skills. Each program is tailored to meet the specific needs of different age groups."
          centered
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {seminars.map((seminar, index) => (
            <SeminarCard
              key={index}
              icon={seminar.icon}
              title={seminar.title}
              description={seminar.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/seminars">
              View All Seminars <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SeminarOverview;
