
import { useEffect } from "react";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Eye, BarChart, Target } from "lucide-react";

const SuccessStories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stories = [
    {
      title: "Digital Wellness at DAV Public School",
      challenge: "DAV Public School was struggling with increasing instances of students being distracted by mobile phones during class hours, affecting academic performance and classroom engagement.",
      solution: "Zest Life Training conducted a series of Responsible Mobile Usage workshops for students across grades 8-12, involving both students and teachers in developing practical strategies for healthier technology habits.",
      results: [
        "Created and implemented a school-wide 'Digital Wellness Policy' with student input",
        "Reduced phone-related classroom disruptions by 64%",
        "Academic engagement improved by 40% according to teacher reports",
        "Students initiated a peer mentorship program for responsible tech use",
      ],
      quote: {
        text: "The workshops transformed our approach to technology. Rather than fighting against devices, we learned to create healthier relationships with them.",
        author: "Dr. Anjali Kumar, Principal, DAV Public School",
      },
    },
    {
      title: "Mental Wellbeing Initiative at St. Mary's School",
      challenge: "St. Mary's School observed increasing stress and anxiety levels among students, particularly in grades 9-12, impacting their academic performance and overall wellbeing.",
      solution: "We implemented a comprehensive Happiness & Well-being seminar series, followed by establishing student-led wellness committees and providing resources for ongoing practice of wellbeing techniques.",
      results: [
        "Reported stress levels decreased by 37% after six months",
        "Teachers noted improved classroom participation and enthusiasm",
        "Creation of dedicated 'calm spaces' within the school campus",
        "95% of students reported learning at least one useful stress management technique",
      ],
      quote: {
        text: "The wellbeing seminars introduced practical strategies that our students continue to use daily. We've seen a remarkable shift in how they approach challenges.",
        author: "Sister Elizabeth Thomas, Coordinator, St. Mary's School",
      },
    },
    {
      title: "Time Management Transformation at Modern School",
      challenge: "Students at Modern School were struggling with balancing academic responsibilities, extracurricular activities, and personal time, leading to burnout and inconsistent performance.",
      solution: "Our Effective Time Management seminar series was customized for different grade levels, complemented by follow-up sessions and practical tools for implementing new habits.",
      results: [
        "Assignment completion rates improved by 52%",
        "Students reported 45% reduction in last-minute cramming",
        "Teachers observed improved quality of work and class preparedness",
        "Development of a school-wide planning system that accommodated both academics and extracurriculars",
      ],
      quote: {
        text: "The time management seminars provided our students with practical systems they could implement immediately. The improvement in their organization skills has been remarkable.",
        author: "Rahul Verma, Vice Principal, Modern School",
      },
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-zest-green/30 to-white py-16 md:py-20">
        <div className="container">
          <SectionHeading
            title="Success Stories"
            subtitle="Real-life examples of how our seminars have made a positive impact on schools and students across India"
            centered
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="space-y-16">
            {stories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6 text-primary">
                    {story.title}
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <div className="flex items-center mb-3">
                        <Eye className="h-5 w-5 text-zest-orange mr-2" />
                        <h3 className="font-semibold text-lg">The Challenge</h3>
                      </div>
                      <p className="text-gray-700">{story.challenge}</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-3">
                        <Target className="h-5 w-5 text-zest-green-dark mr-2" />
                        <h3 className="font-semibold text-lg">Our Approach</h3>
                      </div>
                      <p className="text-gray-700">{story.solution}</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-3">
                        <BarChart className="h-5 w-5 text-zest-blue-dark mr-2" />
                        <h3 className="font-semibold text-lg">The Results</h3>
                      </div>
                      <ul className="space-y-2">
                        {story.results.map((result, i) => (
                          <li key={i} className="flex items-start">
                            <span className="h-5 w-5 text-primary mr-2 flex-shrink-0 font-bold">
                              •
                            </span>
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                    <p className="italic text-gray-700 mb-3">"{story.quote.text}"</p>
                    <p className="font-medium text-gray-900">— {story.quote.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">Create Your Success Story</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join the many schools that have transformed their students' lives through our life skills seminars. Contact us today to discuss how we can create a customized program for your institution.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessStories;
