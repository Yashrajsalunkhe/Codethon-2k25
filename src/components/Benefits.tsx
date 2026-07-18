import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Briefcase, Building, Award, Zap, TrendingUp, Users, Target, Sparkles, Gift } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Gift,
      title: "Cash Prize Pool",
      description: "₹10,000 total prize pool for winners and top performers across all competition rounds",
      gradient: "from-emerald-500/20 to-emerald-600/10",
      iconColor: "text-emerald-400"
    },
    {
      icon: Briefcase,
      title: "Internship cum Placement",
      description: "Exciting internship cum placement opportunity for top performers with direct industry connection",
      gradient: "from-blue-500/20 to-blue-600/10",
      iconColor: "text-blue-400"
    },
    {
      icon: Building,
      title: "Industry Mentorship", 
      description: "Mentorship and training by industry leaders providing real-world professional guidance",
      gradient: "from-purple-500/20 to-purple-600/10",
      iconColor: "text-purple-400"
    },
    {
      icon: Award,
      title: "Industry Exposure",
      description: "Direct exposure to industry-level problems and professional development opportunities",
      gradient: "from-amber-500/20 to-amber-600/10", 
      iconColor: "text-amber-400"
    },
    {
      icon: Star,
      title: "National-Level Certificate",
      description: "Official national-level participation certificate enhancing your professional portfolio",
      gradient: "from-green-500/20 to-green-600/10",
      iconColor: "text-green-400"
    },
    {
      icon: Zap,
      title: "Skills Development",
      description: "Advanced DSA skills, problem-solving abilities, and competitive programming expertise",
      gradient: "from-orange-500/20 to-orange-600/10",
      iconColor: "text-orange-400"
    },
    {
      icon: Users,
      title: "Professional Network",
      description: "Connect with industry professionals, mentors, and like-minded coding enthusiasts",
      gradient: "from-pink-500/20 to-pink-600/10",
      iconColor: "text-pink-400"
    },
    {
      icon: TrendingUp,
      title: "Intenships Offers By",
      description: "Pune, Mumbai, Kolhapur IT Industries",
      gradient: "from-cyan-500/20 to-cyan-600/10",
      iconColor: "text-cyan-400"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Enhanced Background Effects for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background/60" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-primary/3 dark:bg-accent-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-secondary/3 dark:bg-accent-secondary/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-muted/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 animate-slide-up">
          <div className="relative inline-block p-[1px] rounded-full mb-6 bg-gradient-to-r from-accent-secondary to-accent-primary">
            <div className="inline-flex items-center gap-3 bg-background/95 dark:bg-background/80 backdrop-blur-sm rounded-full px-6 py-3 text-accent-secondary text-sm border border-border/30 shadow-lg dark:shadow-none">
              <Gift className="w-5 h-5" />
              <span className="font-medium">Rewards & Benefits</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
            Why <span className="font-mono text-accent-secondary bg-gradient-to-r from-accent-secondary to-accent-primary bg-clip-text text-transparent">Participate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Unlock amazing opportunities and accelerate your career in technology
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-secondary to-transparent mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={benefit.title} className="group relative">
                {/* Enhanced Glow effect for better light theme visibility */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 dark:group-hover:opacity-100 transition-all duration-500`} />
                
                <Card className="relative hover:scale-105 transition-all duration-500 bg-white/95 dark:bg-card/80 border-2 border-border/60 dark:border-border backdrop-blur-sm h-full group-hover:border-accent-primary/60 dark:group-hover:border-accent-primary/30 hover:shadow-2xl dark:hover:shadow-2xl shadow-xl dark:shadow-none group-hover:bg-white dark:group-hover:bg-card/90">
                  <CardHeader className="text-center pb-4 relative">
                    {/* Enhanced Icon with better light theme contrast */}
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${benefit.gradient} border-2 border-border/30 dark:border-border/50 flex items-center justify-center group-hover:scale-110 transition-all duration-300 relative group-hover:border-accent-primary/60 dark:group-hover:border-accent-primary/30 shadow-xl dark:shadow-lg group-hover:shadow-2xl`}>
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${benefit.gradient} blur-md opacity-60 dark:opacity-50 group-hover:opacity-80 dark:group-hover:opacity-80 transition-opacity duration-300`} />
                      <IconComponent className={`w-7 h-7 ${benefit.iconColor} relative z-10 group-hover:rotate-12 transition-transform duration-300 drop-shadow-sm`} />
                    </div>
                    
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-accent-primary transition-colors duration-300 mb-2">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-sm text-foreground/80 dark:text-muted-foreground font-medium leading-relaxed group-hover:text-foreground/90 dark:group-hover:text-foreground transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </CardContent>
                  
                  {/* Enhanced Number badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center text-white font-bold text-xs shadow-xl border-2 border-white dark:border-background">
                    {index + 1}
                  </div>
                  
                  {/* Enhanced Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left opacity-80`} />
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;