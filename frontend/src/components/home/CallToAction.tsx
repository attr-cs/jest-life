import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="section bg-zest-orange bg-opacity-5">
      <div className="container">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Student Lives?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Partner with Zest Life Training to bring essential life skills education to your school. Our interactive seminars are designed to complement academic learning and prepare students for future success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Book a Seminar <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <a href="/zest-life-training-brochure.pdf" download>
                    Download Brochure
                  </a>
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                Have questions? Contact us at{" "}
                <a href="tel:9650655649" className="text-primary hover:underline">
                  +91 9650655649
                </a>{" "}
                or{" "}
                <a
                  href="mailto:zestlife.training@gmail.com"
                  className="text-primary hover:underline"
                >
                  zestlife.training@gmail.com
                </a>
              </p>
            </div>
            <div className="relative hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
                alt="Digital learning environment"
                className="object-cover h-full w-full"
              />
              <div className="absolute inset-0 bg-zest-orange bg-opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
