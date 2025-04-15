import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Seminars", href: "/seminars" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/favicon.png"
                alt="Zest Life Training Logo"
                className="h-7 w-auto"
              />
              <span className="font-bold text-lg hidden xl:inline-block">
                Zest Life Training
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-2 py-2 text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="ghost" size="sm" className="ml-2 flex items-center gap-1 whitespace-nowrap">
                  <Phone className="h-4 w-4 mr-1" />
                  Contact Quick
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-auto p-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Quick Contact</h4>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <a href="tel:9650655649" className="text-sm hover:text-primary">
                      +91 9650655649
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    <a href="mailto:zestlife.training@gmail.com" className="text-sm hover:text-primary">
                      zestlife.training@gmail.com
                    </a>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            
            <Button asChild className="ml-2 whitespace-nowrap">
              <Link to="/contact">Book a Seminar</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden animate-fade-in">
          <div className="container mx-auto px-4 pb-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-foreground/80"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="space-y-2 px-3 py-2">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  <a href="tel:9650655649" className="text-sm hover:text-primary">
                    +91 9650655649
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  <a href="mailto:zestlife.training@gmail.com" className="text-sm hover:text-primary break-all">
                    zestlife.training@gmail.com
                  </a>
                </div>
              </div>
              <Button asChild className="w-full mt-2">
                <Link to="/contact">Book a Seminar</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
