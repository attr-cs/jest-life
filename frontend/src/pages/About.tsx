
import { useEffect } from "react";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Users, BookOpen, Target } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="bg-gradient-to-b from-zest-blue/50 to-white py-16 md:py-20">
        <div className="container">
          <SectionHeading
            title="About Zest Life Training"
            subtitle="We are dedicated to empowering students with essential life skills that complement their academic education and prepare them for future success."
            centered
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Zest Life Training was founded with a simple yet powerful vision - to bridge the gap between academic education and practical life skills that students need to thrive in today's complex world.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, Sunil Bhardwaj, recognized that while schools excel at teaching academic subjects, students often graduate without essential skills like effective communication, time management, digital literacy, and emotional intelligence.
              </p>
              <p className="text-gray-700">
                What started as a small initiative has now grown into a specialized training organization that partners with schools across India to deliver engaging, interactive seminars that make a lasting impact on students' lives.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1600&auto=format&fit=crop"
                alt="Students learning digital skills"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-zest-blue flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-zest-blue-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Who We Are</h3>
              <p className="text-gray-600">
                A team of passionate educators and life skills trainers committed to making a positive impact on young people's lives through interactive and engaging learning experiences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-zest-green flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-zest-green-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3">What We Do</h3>
              <p className="text-gray-600">
                We design and conduct interactive seminars that teach practical life skills to students, empowering them to navigate challenges and succeed in their personal and future professional lives.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-zest-orange-light flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Why We Do It</h3>
              <p className="text-gray-600">
                We believe that equipping young people with essential life skills creates a foundation for their overall wellbeing, academic success, and future career readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-lg overflow-hidden shadow-lg h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1600&auto=format&fit=crop"
                alt="Growth and development visualization"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-zest-green-dark/10"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-gray-700 mb-6">
                We believe that learning essential life skills should be engaging, relevant, and memorable. Our approach combines:
              </p>
              <ul className="space-y-4">
                <li className="flex">
                  <Check className="h-5 w-5 text-zest-green-dark mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Interactive Learning:</strong> Engaging activities that make concepts relatable and memorable
                  </span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-zest-green-dark mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Age-Appropriate Content:</strong> Customized seminars that address the specific needs and challenges of different age groups
                  </span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-zest-green-dark mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Real-World Application:</strong> Practical strategies that students can implement immediately in their daily lives
                  </span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-zest-green-dark mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Research-Based Methods:</strong> Content developed using evidence-based approaches to skill development
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-zest-orange bg-opacity-5">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join Us in This Mission</h2>
            <p className="text-lg text-gray-700 mb-8">
              We invite schools, educators, and parents to partner with us in empowering the next generation with essential life skills. Together, we can prepare students not just for exams, but for life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Book a Seminar</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
