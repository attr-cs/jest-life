
import { useEffect } from "react";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Handshake, Building, UserPlus, School, Download } from "lucide-react";

const GetInvolved = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnershipOptions = [
    {
      icon: <School className="h-10 w-10 text-zest-green-dark" />,
      title: "School Partnerships",
      description:
        "Partner with us to bring comprehensive life skills training to your school. We work with educational institutions to develop customized programs that meet the specific needs of their students and complement existing curriculum.",
      actions: [
        {
          label: "Schedule a Consultation",
          href: "/contact",
        },
      ],
    },
    {
      icon: <Building className="h-10 w-10 text-zest-blue-dark" />,
      title: "Corporate Sponsorships",
      description:
        "Support our mission to reach more students across India. Corporate sponsors help fund seminars for schools in underserved communities, contributing to improved educational outcomes and future workforce development.",
      actions: [
        {
          label: "Learn About Sponsorship",
          href: "/contact",
        },
        {
          label: "Download Brochure",
          href: "/zest-life-training-brochure.pdf",
          download: true,
          icon: <Download className="h-4 w-4 ml-1" />,
        },
      ],
    },
    {
      icon: <UserPlus className="h-10 w-10 text-primary" />,
      title: "Facilitator Opportunities",
      description:
        "Join our team of skilled facilitators. We're looking for passionate individuals with experience in education, psychology, or youth development who can deliver engaging seminars and connect with students.",
      actions: [
        {
          label: "Express Interest",
          href: "/contact",
        },
      ],
    },
    {
      icon: <Handshake className="h-10 w-10 text-zest-orange-light" />,
      title: "Educational NGO Collaborations",
      description:
        "We collaborate with educational NGOs to extend our reach and impact. By combining resources and expertise, we can develop more comprehensive approaches to life skills education.",
      actions: [
        {
          label: "Propose Collaboration",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-zest-blue/30 to-white py-16 md:py-20">
        <div className="container">
          <SectionHeading
            title="Get Involved"
            subtitle="Join us in our mission to empower young minds through life skills training. There are many ways to partner with us and make a difference."
            centered
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {partnershipOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100 flex flex-col h-full"
              >
                <div className="mb-4">{option.icon}</div>
                <h2 className="text-2xl font-bold mb-4">{option.title}</h2>
                <p className="text-gray-700 mb-6 flex-grow">{option.description}</p>
                <div className="flex flex-wrap gap-4 mt-auto">
                  {option.actions.map((action, i) => (
                    <Button
                      key={i}
                      variant={i === 0 ? "default" : "outline"}
                      asChild
                    >
                      {action.download ? (
                        <a href={action.href} download>
                          {action.label}
                          {action.icon}
                        </a>
                      ) : (
                        <Link to={action.href}>
                          {action.label}
                          {action.icon}
                        </Link>
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Partner With Us?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="h-6 w-6 text-primary mr-3 flex-shrink-0 font-bold text-2xl">•</span>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Proven Impact</h3>
                      <p className="text-gray-700">
                        Our seminars have demonstrably improved student well-being, academic performance, and social skills across diverse educational settings.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 text-primary mr-3 flex-shrink-0 font-bold text-2xl">•</span>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Customized Approach</h3>
                      <p className="text-gray-700">
                        We tailor our programs to meet the specific needs of your organization, school, or community, ensuring relevance and maximum impact.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 text-primary mr-3 flex-shrink-0 font-bold text-2xl">•</span>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Holistic Development</h3>
                      <p className="text-gray-700">
                        Our programs address the critical gap between academic education and practical life skills, contributing to students' holistic development.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-zest-green/10 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h2>
                <p className="text-gray-700 mb-6">
                  Whether you're an educational institution looking to enhance your curriculum, a corporation seeking CSR opportunities, or an individual wanting to contribute to youth development, there's a place for you in our community.
                </p>
                <p className="text-gray-700 mb-6">
                  Contact us today to discuss how we can work together to empower the next generation with essential life skills.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="/zest-life-training-brochure.pdf" download className="flex items-center">
                      Download Brochure
                      <Download className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInvolved;
