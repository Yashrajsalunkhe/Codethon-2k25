import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, Trophy, Users, ExternalLink } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useNavigate, useLocation } from "react-router-dom";
import LogoImage from "@/img/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the main page, navigate to main page first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // We're already on the main page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "hero", icon: Trophy },
    { label: "About College", id: "institute-journey", icon: Users },
    { label: "Rounds", id: "rounds", icon: Calendar },
    { label: "Benefits", id: "benefits", icon: Trophy },
    { label: "Rules", id: "rules", icon: Users },
    { label: "Gallery", id: "gallery", icon: Users },
    { label: "Calendar", id: "calendar", icon: Calendar },
    { label: "FAQ", id: "faq", icon: Users },
    { label: "Register", id: "registration", icon: ExternalLink },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => {
            if (location.pathname !== '/') {
              navigate('/');
            } else {
              scrollToSection('hero');
            }
          }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-full blur-lg"></div>
              <div className="relative w-10 h-10 md:w-12 md:h-12 bg-background border border-accent-primary/50 rounded-full p-1.5">
                <img 
                  src={LogoImage} 
                  alt="ADCET Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-semibold text-foreground">
                <span className="font-audiowide text-accent-primary">Codathon</span>
                <span className="text-accent-secondary ml-1">2026</span>
              </h1>
              <p className="text-xs text-muted-foreground">ADCET Programming Competition</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Register Button & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Register Button */}
            <Button 
              size="sm"
              className="hidden md:flex bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary/90 hover:to-accent-secondary/90 text-white font-medium"
              onClick={() => window.open('https://unstop.com/p/codathon-2025-annasaheb-dange-college-of-engineering-and-technolgy-1532053', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Register Now
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg">
            <div className="container mx-auto px-6 py-4">
              <nav className="space-y-2">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Button
                      key={item.id}
                      variant="ghost"
                      size="sm"
                      onClick={() => scrollToSection(item.id)}
                      className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    >
                      <IconComponent className="w-4 h-4 mr-3" />
                      {item.label}
                    </Button>
                  );
                })}
                <div className="pt-2 mt-2 border-t border-border">
                  <Button 
                    size="sm"
                    className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary/90 hover:to-accent-secondary/90 text-white font-medium"
                    onClick={() => {
                      window.open('https://unstop.com/p/codathon-2025-annasaheb-dange-college-of-engineering-and-technolgy-1532053', '_blank');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Register on Unstop
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
