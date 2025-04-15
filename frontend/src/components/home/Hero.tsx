
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-zest-green via-white to-zest-blue overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none" />
      <div className="container relative pt-20 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-balance">
              Empowering Young Minds Through{" "}
              <span className="text-primary">Life Skills</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              Interactive seminars that prepare students with essential skills for
              success in school, relationships, and digital life.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg">
                <Link to="/contact">
                  Book a Seminar <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/5" />
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1920&auto=format&fit=crop"
              alt="Students engaged in an interactive seminar"
              className="object-cover h-full w-full rounded-lg"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
