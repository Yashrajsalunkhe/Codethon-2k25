import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QrCode, ExternalLink, Phone, Mail, User, Sparkles, Clock, CheckCircle } from "lucide-react";

const Registration = () => {
  const contacts = [
  {
    name: "Sandip Magdum",
    phone: "+91 80557 28941",
    email: null,
    role: "Dean, TPO ADCET Ashta",
    icon: User,
    gradient: "from-blue-500/20 to-blue-600/10"
  },
  {
    name: "Prof. Swapnil Gramopadhye",
    phone: "+91 97667 03147",
    email: "smg_cse@adcet.in",
    role: "TPO ADCET Ashta",
    icon: User,
    gradient: "from-purple-500/20 to-purple-600/10"
  },
  {
    name: "Gaurav Kumbhare",
    phone: "+91 77688 07185",
    email: "kumbharegaurav100@gmail.com",
    role: "Student Coordinator",
    icon: User,
    gradient: "from-amber-500/20 to-amber-600/10"
  },
  {
    name: "Abhay Raut",
    phone: "+91 85307 50855",
    email: "abhayraut37@gmail.com",
    role: "Student Coordinator",
    icon: User,
    gradient: "from-green-500/20 to-green-600/10"
  }  
];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-transparent to-background/60" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full px-6 py-3 text-red-400 text-sm backdrop-blur-sm mb-8 hover:scale-105 transition-transform duration-300">
            <Clock className="w-5 h-5 animate-spin" />
            <span className="font-medium">Registrations Open: 25 july 2026 · Close: 01 September 2026, 11:59 PM</span>
            <Badge variant="destructive" className="ml-2 animate-bounce">URGENT</Badge>
          </div>
          <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
            <span className="font-mono bg-gradient-to-r from-accent-secondary to-accent-primary bg-clip-text text-transparent">Register</span> Now
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Secure your spot in this prestigious national-level coding competition
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent mx-auto mt-8" />
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Registration Card */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500" />
            
            <Card className="relative bg-card/90 border border-accent-primary/30 backdrop-blur-sm group-hover:border-accent-primary/50 transition-all duration-500">
              <CardHeader className="text-center relative">
                <div className="absolute top-4 right-4">
                  <Sparkles className="w-6 h-6 text-accent-secondary animate-pulse" />
                </div>
                <CardTitle className="text-3xl font-light mb-6">
                  Join the <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent font-audiowide">Codathon</span>
                </CardTitle>
                <p className="text-lg text-foreground/90 font-light">
                  Register through our official partner platform
                </p>
              </CardHeader>
              <CardContent className="space-y-10">
                {/* Enhanced QR Code Section */}
                <div className="flex justify-center">
                  <div className="relative group/qr">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/30 to-accent-secondary/30 rounded-2xl blur-lg group-hover/qr:blur-xl transition-all duration-300" />
                    <div className="relative w-48 h-48 bg-white border-2 border-accent-primary/30 rounded-2xl flex items-center justify-center group-hover/qr:scale-105 transition-all duration-300 p-4">
                      <img 
                        src="/qr-code.png" 
                        alt="Registration QR Code - Scan to register for Codathon 2026" 
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <p className="text-sm text-accent-primary font-medium">Scan QR Code to Register</p>
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent mx-auto mt-2" />
                    </div>
                  </div>
                </div>

                {/* Enhanced Registration Button */}
                <div className="text-center space-y-6">
                  <div className="relative group/btn">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl blur-lg group-hover/btn:blur-xl transition-all duration-300 opacity-70" />
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="relative w-full py-4 text-lg bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary/90 hover:to-accent-secondary/90 text-white font-medium rounded-xl transition-all duration-300 group-hover/btn:scale-105 shadow-xl"
                      onClick={() => window.open('https://unstop.com/p/codathon-2025-annasaheb-dange-college-of-engineering-and-technolgy-1532053', '_blank')}
                    >
                      <ExternalLink className="w-5 h-5 mr-3 group-hover/btn:scale-110 transition-transform duration-300" />
                      Register on Unstop
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    🔒 Quick, secure, and completely free registration
                  </p>
                </div>

                {/* Enhanced Steps */}
                <div className="space-y-6 pt-6 border-t border-neutral-700/50">
                  <h4 className="font-medium text-foreground text-lg flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent-secondary" />
                    Registration Process
                  </h4>
                  <div className="space-y-4">
                    {[
                      "Access registration link",
                      "Complete personal details", 
                      "Verify academic status",
                      "Submit application"
                    ].map((step, index) => (
                      <div key={index} className="flex items-center gap-4 group/step hover:translate-x-2 transition-transform duration-200">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30 text-accent-primary text-sm font-bold flex items-center justify-center group-hover/step:scale-110 transition-transform duration-200">
                          {index + 1}
                        </div>
                        <p className="text-foreground/90 font-light group-hover/step:text-foreground transition-colors duration-200">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Contact Information */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-semibold text-foreground mb-3">
                Contact <span className="font-mono text-accent-primary bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Information</span>
              </h3>
              <p className="text-muted-foreground font-light">
                For inquiries and support, please reach out to our coordinators
              </p>
              <div className="w-20 h-0.5 bg-accent-primary mt-4 mx-auto lg:mx-0" />
            </div>
            
            {contacts.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Card key={index} className="bg-card border border-border hover:border-accent-primary/40 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-accent-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {contact.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3 font-medium">
                          {contact.role}
                        </p>
                        <div className="space-y-2">
                          {contact.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-accent-secondary" />
                              <a 
                                href={`tel:${contact.phone}`}
                                className="text-foreground/90 hover:text-accent-primary transition-colors duration-200 font-medium text-sm"
                              >
                                {contact.phone}
                              </a>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-accent-primary" />
                            <a 
                              href={`mailto:${contact.email}`}
                              className="text-foreground/90 hover:text-accent-primary transition-colors duration-200 font-medium text-sm"
                            >
                              {contact.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Professional Support Card */}
            <Card className="bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 border border-accent-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Technical Support
                    </h4>
                    <p className="text-foreground/90 font-light mb-4 leading-relaxed">
                      Tanmay Patil 
                      <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-accent-secondary" />
                            <a 
                              className="text-foreground/90 hover:text-accent-primary transition-colors duration-200 font-medium text-sm"
                            >
                              +91 9022976013
                            </a>
                          </div>
                          Pranav Patil
                      <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-accent-secondary" />
                            <a 
                              className="text-foreground/90 hover:text-accent-primary transition-colors duration-200 font-medium text-sm"
                            >
                              +91 9130867073
                            </a>
                          </div>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full border border-accent-primary/20 font-medium">
                        Registration Support
                      </span>
                      <span className="text-xs bg-accent-secondary/10 text-accent-secondary px-3 py-1 rounded-full border border-accent-secondary/20 font-medium">
                        Technical Assistance
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;