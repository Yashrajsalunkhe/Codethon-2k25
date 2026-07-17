import { Calendar, MapPin, Mail, Phone, Heart, Code, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/60 border-t border-border backdrop-blur-sm relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Competition Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-foreground">
                <span className="font-audiowide text-accent-primary">Codathon</span>
                <span className="text-lg text-accent-secondary ml-2">2026</span>
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                A national-level competitive programming competition organized by Annasaheb Dange College of Engineering and Technology.
              </p>
            </div>
            
            <div className="flex items-center gap-3 text-foreground">
              <div className="p-2 rounded-lg bg-accent-primary/20 border border-accent-primary/30">
                <Calendar className="w-4 h-4 text-accent-primary" />
              </div>
              <span className="font-light">8 Sept - Round 1<br></br>
                15 Sept - Round 2 & 3
              </span>
            </div>
          </div>

          {/* College Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-medium text-foreground">College Information</h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent-secondary/20 border border-accent-secondary/30 mt-1">
                  <MapPin className="w-4 h-4 text-accent-secondary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">
                    Annasaheb Dange College of Engineering and Technology
                  </p>
                  <p className="text-muted-foreground text-sm font-light">
                    Ashta, Sangli, Maharashtra<br />
                    An Autonomous Institute
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent-primary/20 border border-accent-primary/30">
                  <Mail className="w-4 h-4 text-accent-primary" />
                </div>
                <a 
                  href="https://www.adcet.ac.in/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent-primary transition-colors duration-300 font-light"
                >
                  www.adcet.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-medium text-foreground">Quick Links</h4>
            
            <div className="space-y-4">
              <a 
                href="https://unstop.com/p/codathon-2025-annasaheb-dange-college-of-engineering-and-technolgy-1532053" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-accent-primary transition-colors duration-300 group"
              >
                <div className="p-2 rounded-lg bg-accent-primary/20 border border-accent-primary/30 group-hover:bg-accent-primary/30 transition-colors duration-300">
                  <ExternalLink className="w-4 h-4 text-accent-primary" />
                </div>
                <span className="font-light group-hover:translate-x-1 transition-transform duration-200">Register on Unstop</span>
              </a>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded-lg bg-muted border border-border">
                  <Code className="w-4 h-4" />
                </div>
                <span className="font-light">C • Python • Java Programming</span>
              </div>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded-lg bg-muted border border-border">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-light">+91 77688 07185</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span className="font-light">© 2025 ADCET Codathon. Made</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="font-light">by  Yashraj Salunkhe ,  Aditya Padale</span>
            </div>

            {/* Competition Badge */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30 rounded-full px-4 py-2">
                <span className="text-sm font-medium text-accent-primary">🏆 National Competition</span>
              </div>
              <div className="bg-gradient-to-r from-accent-secondary/20 to-accent-primary/20 border border-accent-secondary/30 rounded-full px-4 py-2">
                <span className="text-sm font-medium text-accent-secondary">🎯 25 Years Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

