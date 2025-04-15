
import { useEffect } from "react";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smile, Clock, Smartphone, Shield, Users, ArrowRight } from "lucide-react";

const SeminarPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seminars = [
    {
      id: "happiness",
      icon: <Smile className="h-10 w-10 text-zest-orange" />,
      title: "Happiness & Well-being",
      description:
        "Teaching students the science of happiness and practical strategies to improve mental well-being and maintain a positive outlook.",
      details: [
        "Understanding the science behind happiness and positive psychology",
        "Techniques for managing stress and anxiety in academic settings",
        "Building resilience and maintaining a positive mindset",
        "Practical daily habits that contribute to long-term well-being",
        "Recognizing and addressing signs of emotional distress",
      ],
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "time-management",
      icon: <Clock className="h-10 w-10 text-zest-green-dark" />,
      title: "Effective Time Management",
      description:
        "Equipping students with techniques to prioritize tasks, set goals, and maintain a healthy balance between studies, extracurriculars, and personal time.",
      details: [
        "Goal setting and prioritization techniques for academic success",
        "Creating effective study schedules and managing deadlines",
        "Overcoming procrastination and building productive habits",
        "Digital tools and strategies to enhance productivity",
        "Maintaining work-life balance and preventing burnout",
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "mobile-usage",
      icon: <Smartphone className="h-10 w-10 text-zest-blue-dark" />,
      title: "Responsible Mobile Usage",
      description:
        "Helping students develop healthy habits around technology use and recognize the importance of digital wellness in their daily lives.",
      details: [
        "Understanding the impact of excessive screen time on health and academics",
        "Strategies for mindful technology use and digital detoxing",
        "Setting healthy boundaries with mobile devices and social media",
        "Utilizing mobile technology as a tool for learning rather than distraction",
        "Developing awareness about digital addiction and healthy alternatives",
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "digital-safety",
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Digital & Personal Safety",
      description:
        "Educating students about online risks, privacy protection, and practices to stay safe both in digital environments and the real world.",
      details: [
        "Understanding online privacy and protecting personal information",
        "Recognizing and responding to cyberbullying and online threats",
        "Safe social media practices and digital footprint awareness",
        "Verifying information and identifying fake news/misinformation",
        "Personal safety strategies in various real-world situations",
      ],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "relationships",
      icon: <Users className="h-10 w-10 text-zest-orange-light" />,
      title: "Building Meaningful Relationships",
      description:
        "Developing students' social skills, emotional intelligence, and ability to form healthy, supportive relationships with peers and adults.",
      details: [
        "Effective communication skills for diverse social contexts",
        "Developing emotional intelligence and empathy",
        "Conflict resolution and peaceful problem-solving strategies",
        "Building and maintaining healthy friendships and peer relationships",
        "Understanding boundaries and respectful interaction with others",
      ],
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-zest-green/50 to-white py-16 md:py-20">
        <div className="container">
          <SectionHeading
            title="Our Seminar Offerings"
            subtitle="Interactive and engaging seminars designed to equip students with essential life skills for success in school and beyond."
            centered
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seminars.map((seminar, index) => (
              <div key={seminar.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="h-64 relative">
                  <img
                    src={seminar.image}
                    alt={seminar.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-md">
                    {seminar.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3">{seminar.title}</h2>
                  <p className="text-gray-700 mb-4">{seminar.description}</p>
                  <h3 className="text-lg font-semibold mb-2">What Students Will Learn:</h3>
                  <ul className="space-y-2 mb-6">
                    {seminar.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-zest-blue/30">
        <div className="container">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Customized Programs</h2>
                <p className="text-gray-700 mb-6">
                  We understand that every educational institution has unique needs. Our seminars can be customized based on:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Age Groups:</strong> Tailored content for different grade levels
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Session Duration:</strong> From single workshops to comprehensive programs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Specific Challenges:</strong> Addressing issues unique to your student population
                    </span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Ready to bring these seminars to your school?</h3>
                  <p className="text-gray-600">
                    Contact us to discuss your specific needs and schedule a seminar.
                  </p>
                </div>
                <Button asChild size="lg">
                  <Link to="/contact">Book a Seminar</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeminarPage;
