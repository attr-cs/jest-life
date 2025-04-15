
import { useEffect } from "react";
import SectionHeading from "@/components/common/SectionHeading";
import { Quote } from "lucide-react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  institution?: string;
}

const TestimonialCard = ({ content, author, role, institution }: TestimonialProps) => (
  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
    <Quote className="h-8 w-8 text-zest-orange opacity-50 mb-4" />
    <p className="text-gray-700 italic mb-6">{content}</p>
    <div className="flex items-center">
      <div className="h-12 w-12 rounded-full bg-zest-orange-light flex items-center justify-center text-white font-semibold text-xl">
        {author.charAt(0)}
      </div>
      <div className="ml-4">
        <h4 className="font-semibold text-gray-900">{author}</h4>
        <p className="text-gray-600">
          {role}
          {institution && <span>, {institution}</span>}
        </p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Expanded testimonials for the dedicated page
  const educatorTestimonials = [
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
        "I highly recommend Zest Life Training's seminars to any school looking to enhance their students' personal development. Their facilitators are engaging and connect well with students of all ages.",
      author: "Nisha Mehta",
      role: "Academic Director",
      institution: "Indraprastha International School"
    },
  ];

  const parentTestimonials = [
    {
      content:
        "As a parent, I've seen remarkable improvement in my daughter's ability to manage screen time after attending the Responsible Mobile Usage seminar. The entire family has benefited from the practices she brought home.",
      author: "Meera Patel",
      role: "Parent",
    },
    {
      content:
        "The digital safety seminar taught my son important skills about online privacy that I wouldn't have known to teach him myself. I feel much more at ease knowing he has these tools.",
      author: "Vikram Singh",
      role: "Parent",
    },
    {
      content:
        "My children came home from the Happiness workshop with practical exercises we now do together as a family. It's brought us closer and helped us all manage stress better.",
      author: "Lakshmi Nair",
      role: "Parent",
    },
  ];

  const studentTestimonials = [
    {
      content:
        "The relationship-building seminar helped me understand how to communicate better with my peers and teachers. I've made new friends and feel more confident speaking in class.",
      author: "Arjun K.",
      role: "Student, Grade 9",
    },
    {
      content:
        "The time management techniques I learned have helped me balance my studies with sports practice. I'm less stressed and my grades have improved.",
      author: "Divya S.",
      role: "Student, Grade 11",
    },
    {
      content:
        "I used to spend too much time on my phone, but after the mobile usage workshop, I've created better habits. I'm sleeping better and have more time for things I enjoy.",
      author: "Rohan M.",
      role: "Student, Grade 10",
    },
    {
      content:
        "The digital safety seminar taught me how to protect myself online. I've updated my privacy settings and am more careful about what I share on social media now.",
      author: "Ananya J.",
      role: "Student, Grade 8",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-zest-orange/20 to-white py-16 md:py-20">
        <div className="container">
          <SectionHeading
            title="What People Are Saying"
            subtitle="Hear from educators, parents, and students who have experienced the impact of our seminars"
            centered
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Educators' Perspective</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educatorTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`educator-${index}`}
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
                institution={testimonial.institution}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Parents' Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {parentTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`parent-${index}`}
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Student Voices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studentTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`student-${index}`}
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-zest-blue/20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Experience the Difference</h2>
            <p className="text-lg text-gray-700 mb-6">
              Join the growing community of schools benefiting from our specialized life skills seminars. Book a session today and see the positive impact on your students.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Book a Seminar
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
