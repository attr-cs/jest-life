
import Hero from "@/components/home/Hero";
import MissionSection from "@/components/home/MissionSection";
import SeminarOverview from "@/components/home/SeminarOverview";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import CallToAction from "@/components/home/CallToAction";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const { toast } = useToast();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Welcome toast for first-time visitors (using sessionStorage)
    if (!sessionStorage.getItem("welcomed")) {
      setTimeout(() => {
        toast({
          title: "Welcome to Zest Life Training!",
          description: "Explore our life-skill seminars designed to empower young minds.",
        });
        sessionStorage.setItem("welcomed", "true");
      }, 1500);
    }
  }, [toast]);
  
  return (
    <>
      <Helmet>
        <title>Zest Life Training - Empowering Young Minds Through Life Skills</title>
        <meta name="description" content="Zest Life Training conducts interactive life-skill seminars for students in schools and educational institutions. Empowering young minds through essential life skills." />
        <meta name="keywords" content="life skills, student seminars, educational workshops, school programs, time management, digital safety" />
      </Helmet>
      
      <div className="animate-fade-in">
        <Hero />
        <MissionSection />
        <SeminarOverview />
        <TestimonialSlider />
        <CallToAction />
      </div>
    </>
  );
};

export default Home;
