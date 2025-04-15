
import { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  institution?: string;
}

const TestimonialSlider = () => {
  const testimonials: Testimonial[] = [
    {
      content:
        "The happiness and well-being seminar conducted by Zest Life Training was transformative for our students. They've been applying these techniques in their daily lives, and we've noticed a positive shift in their overall attitude.",
      author: "Rajesh Sharma",
      role: "Principal",
      institution: "Delhi Public School",
    },
    {
      content:
        "The digital safety seminar was eye-opening for both students and staff. The practical tips shared were immediately implementable, and I've seen students becoming more conscious about their online activities.",
      author: "Priya Malhotra",
      role: "Vice Principal",
      institution: "Mount Carmel School",
    },
    {
      content:
        "The time management workshop was exactly what our students needed. The strategies taught were practical and have helped many of our students balance their academics and extracurriculars more effectively.",
      author: "Anil Kapoor",
      role: "School Counselor",
      institution: "Ryan International School",
    },
    {
      content:
        "As a parent, I've seen remarkable improvement in my daughter's ability to manage screen time after attending the Responsible Mobile Usage seminar. The entire family has benefited from the practices she brought home.",
      author: "Meera Patel",
      role: "Parent",
    },
    {
      content:
        "The relationship-building seminar helped our students develop better communication skills and empathy. The classroom environment has become more supportive and collaborative since then.",
      author: "Sanjay Gupta",
      role: "Teacher",
      institution: "Army Public School",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section bg-gradient-to-br from-zest-blue via-white to-zest-green">
      <div className="container">
        <SectionHeading
          title="What People Are Saying"
          subtitle="Feedback from educators, students and parents who have experienced our seminars"
          centered
        />

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 relative">
            <Quote className="absolute text-gray-200 h-24 w-24 -top-4 -left-4 opacity-50" />
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-zest-orange-light flex items-center justify-center text-white font-semibold text-xl">
                  {testimonials[currentIndex].author.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role}
                    {testimonials[currentIndex].institution && (
                      <span>, {testimonials[currentIndex].institution}</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
