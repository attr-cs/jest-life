import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/favicon.png"
                alt="Zest Life Training Logo"
                className="h-7 w-auto"
              />
              <span className="font-bold text-lg">Zest Life Training</span>
            </Link>
            <p className="text-sm text-gray-600 max-w-xs">
              Empowering young minds through essential life skills with interactive seminars.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-primary transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-primary transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-primary transition"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-primary text-sm transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-primary text-sm transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/seminars"
                  className="text-gray-600 hover:text-primary text-sm transition"
                >
                  Seminars
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-600 hover:text-primary text-sm transition"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/success-stories"
                  className="text-gray-600 hover:text-primary text-sm transition"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/get-involved"
                  className="text-gray-600 hover:text-primary text-sm transition"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <a
                  href="/zest-life-training-brochure.pdf"
                  className="text-gray-600 hover:text-primary text-sm transition"
                  download
                >
                  Download Brochure
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-primary text-sm transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="tel:9650655649"
                  className="text-gray-600 hover:text-primary text-sm transition"
                >
                  +91 9650655649
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:zestlife.training@gmail.com"
                  className="text-gray-600 hover:text-primary text-sm transition break-all"
                >
                  zestlife.training@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Button asChild>
                <Link to="/contact">Book a Seminar</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Zest Life Training. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
