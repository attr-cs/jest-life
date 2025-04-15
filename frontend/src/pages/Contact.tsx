import { useEffect, useState } from "react";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Clock, Download, ExternalLink } from "lucide-react";
import FeedbackForm from "@/components/contact/FeedbackForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      // Reset form using the native form reset
      (e.target as HTMLFormElement).reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <section className="bg-gradient-to-b from-zest-orange/20 to-white py-16 md:py-20">
        <div className="container">
          <SectionHeading
            title="Contact Us"
            subtitle="Get in touch to learn more about our seminars or to book a session for your school"
            centered
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="contact" className="text-base">
                Contact Us
              </TabsTrigger>
              <TabsTrigger value="feedback" className="text-base">
                Share Feedback
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="contact" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="institution">School/Institution</Label>
                        <Input
                          id="institution"
                          name="institution"
                          placeholder="Your school or organization"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="seminar">Interested Seminar</Label>
                      <Select>
                        <SelectTrigger id="seminar">
                          <SelectValue placeholder="Select a seminar" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="happiness">Happiness & Well-being</SelectItem>
                          <SelectItem value="time-management">Effective Time Management</SelectItem>
                          <SelectItem value="mobile-usage">Responsible Mobile Usage</SelectItem>
                          <SelectItem value="digital-safety">Digital & Personal Safety</SelectItem>
                          <SelectItem value="relationships">Building Meaningful Relationships</SelectItem>
                          <SelectItem value="multiple">Multiple Seminars</SelectItem>
                          <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your requirements or any questions you have"
                        rows={5}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full transition-all hover:scale-105" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>

                <div>
                  <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-100 mb-8 hover:shadow-lg transition-shadow">
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-zest-green flex items-center justify-center mr-4 flex-shrink-0">
                          <Phone className="h-5 w-5 text-zest-green-dark" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Phone</h3>
                          <a
                            href="tel:9650655649"
                            className="text-primary hover:underline transition-all"
                          >
                            +91 9650655649
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-zest-blue flex items-center justify-center mr-4 flex-shrink-0">
                          <Mail className="h-5 w-5 text-zest-blue-dark" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Email</h3>
                          <a
                            href="mailto:zestlife.training@gmail.com"
                            className="text-primary hover:underline break-all transition-all"
                          >
                            zestlife.training@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-zest-orange-light flex items-center justify-center mr-4 flex-shrink-0">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                          <p className="text-gray-700">Monday - Friday: 9 AM - 6 PM</p>
                          <p className="text-gray-700">Saturday: 9 AM - 1 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zest-green/10 rounded-lg p-6 md:p-8">
                    <h3 className="text-xl font-semibold mb-4">Resources</h3>
                    <div className="space-y-4">
                      <Button variant="outline" className="w-full flex justify-between items-center group" asChild>
                        <a href="/zest-life-training-brochure.pdf" download className="flex items-center">
                          <span className="flex items-center">
                            <Download className="h-4 w-4 mr-2" />
                            Download Brochure
                          </span>
                          <span className="text-primary group-hover:translate-x-1 transition-transform">
                            <ExternalLink className="h-4 w-4" />
                          </span>
                        </a>
                      </Button>
                      <p className="text-sm text-muted-foreground">
                        Download our comprehensive brochure for detailed information about our seminars, 
                        methodology, and benefits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="feedback" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <FeedbackForm onSubmitSuccess={() => setActiveTab("contact")} />
                
                <div className="space-y-8">
                  <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6">Why Share Your Experience?</h2>
                    <ul className="space-y-4 list-disc pl-6">
                      <li className="text-gray-700">
                        <span className="font-semibold">Help Other Schools:</span> Your testimonial can help other educational institutions understand the impact of our seminars.
                      </li>
                      <li className="text-gray-700">
                        <span className="font-semibold">Improve Our Programs:</span> Your feedback helps us refine our seminars and create better learning experiences.
                      </li>
                      <li className="text-gray-700">
                        <span className="font-semibold">Share Your Success:</span> Let others know how our programs have benefited your students or institution.
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-zest-blue/10 rounded-lg p-6 md:p-8">
                    <h3 className="text-xl font-semibold mb-4">Featured On Our Website</h3>
                    <p className="text-gray-700 mb-4">
                      With your permission, we may feature your testimonial on our website to inspire others. We use only your name and institution (if provided) — no personal contact information is shared.
                    </p>
                    <p className="text-primary font-medium">
                      Thank you for helping us spread the word about life skills education!
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Student Lives?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Partner with Zest Life Training to bring essential life skills education to your school and empower your students for future success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="animate-pulse">
              <a href="tel:9650655649" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </a>
            </Button>
            <Button variant="outline" asChild size="lg" className="hover-scale">
              <a href="/zest-life-training-brochure.pdf" download className="flex items-center">
                <Download className="mr-2 h-5 w-5" /> Download Brochure
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
