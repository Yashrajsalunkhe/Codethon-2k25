import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Sword, Crown, Monitor, Code2, Trophy, ChevronRight, Zap, Users } from "lucide-react";

const Rounds = () => {
  const rounds = [
    {
      title: "Coding Eligibility Test",
      icon: Brain,
      description: "Prove you belong",
      features: [
        "Aptitude, Technical MCQs & Programming",
        "90 minutes",
        "Day 1 · 11 Sept 2026, 10:00 AM - 1:00 PM",
        "all round conduted in adcet campus"
      ],
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Coding Marathon",
      icon: Sword,
      description: "Prove your skills",
      features: [
        "10 programming problems, solo coding",
        "Real-time leaderboard",
        "Top 100 engineers qualify for Day 2",
        "Day 1 · 11 Sept 2026, 2:00 PM - 5:00 PM"
        
      ],
      color: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Company Challenge Arena",
      icon: Crown,
      description: "Solve real problems",
      features: [
        "Pick your preferred company",
        "Live coding evaluation on industry problems",
        "Day 2 · 11 Sept 2026, 10:00 AM - 1:00 PM"
      ],
      color: "from-amber-500/20 to-amber-600/20",
      iconColor: "text-amber-400",
      borderColor: "border-amber-500/30"
    },
    {
      title: "Interviews & Internship Release",
      icon: Trophy,
      description: "Claim your victory",
      features: [
        "Technical Interview (30-45 min) by company experts",
        "HR Interview (20-30 min) — culture fit & alignment",
        "Top performers receive an internship",
        "Day 2 · 12 Sept 2026, 2:00 PM - 5:00 PM"
      ],
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-400",
      borderColor: "border-green-500/30"
    }
  ];

  return (
    <section className=" relative overflow-hidden">
      {/* Enhanced Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background/60" />
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-accent-primary/3 dark:bg-accent-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-accent-secondary/3 dark:bg-accent-secondary/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-muted/8 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 animate-slide-up">
          <div className="relative inline-block p-[1px] rounded-full mb-6 bg-gradient-to-r from-accent-primary to-accent-secondary">
            <div className="inline-flex items-center gap-3 bg-background/95 dark:bg-background/80 backdrop-blur-sm rounded-full px-6 py-3 text-accent-primary text-sm border border-border/30 shadow-lg dark:shadow-none">
              <Zap className="w-5 h-5" />
              <span className="font-medium">Competition Structure</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
            Competition <span className="font-mono text-accent-primary bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Rounds</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Four carefully crafted stages designed to test and enhance your coding abilities
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
          {rounds.map((round, index) => {
            const IconComponent = round.icon;
            return (
              <div key={round.title} className="group relative">
                {/* Enhanced Glow effect for light/dark theme */}
                <div className={`absolute inset-0 bg-gradient-to-r ${round.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 dark:group-hover:opacity-100 transition-all duration-500`} />
                <div className={`absolute inset-0 bg-gradient-to-r ${round.color} rounded-2xl blur-2xl opacity-0 group-hover:opacity-15 dark:group-hover:opacity-60 transition-all duration-500`} />
                
                <Card className={`relative hover:scale-105 transition-all duration-500 bg-white dark:bg-card/80 border-2 border-gray-300 dark:border-border backdrop-blur-sm h-full group-hover:shadow-2xl dark:group-hover:shadow-2xl shadow-2xl dark:shadow-lg group-hover:border-gray-400 dark:group-hover:border-opacity-60 group-hover:bg-gray-50 dark:group-hover:bg-card/90`}>
                  {/* Card header with improved styling */}
                  <CardHeader className="text-center pb-6 relative">
                    {/* Round number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center text-white font-bold text-xs shadow-2xl border-2 border-white dark:border-background z-10">
                      {index + 1}
                    </div>
                    
                    {/* Icon with enhanced styling */}
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${round.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 relative shadow-2xl dark:shadow-lg group-hover:shadow-3xl border-2 border-gray-300 dark:border-border/20`}>
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${round.color} blur-md opacity-80 dark:opacity-50 group-hover:opacity-100 dark:group-hover:opacity-80 transition-opacity duration-300`} />
                      <IconComponent className={`w-8 h-8 ${round.iconColor} relative z-10 group-hover:rotate-12 transition-transform duration-300 drop-shadow-md`} />
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-foreground mb-3 group-hover:text-accent-primary transition-colors duration-300">
                      {round.title}
                    </CardTitle>
                    <p className="text-gray-700 dark:text-muted-foreground font-semibold text-lg">
                      {round.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 pt-0">
                    {round.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-200">
                        <div className="flex-shrink-0">
                          <ChevronRight className="w-4 h-4 text-accent-secondary group-hover/item:text-accent-primary transition-colors duration-200" />
                        </div>
                        <p className="text-gray-800 dark:text-muted-foreground font-semibold group-hover/item:text-gray-900 dark:group-hover/item:text-foreground/90 transition-colors duration-200">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                  
                  {/* Enhanced Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${round.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left opacity-80 group-hover:opacity-100`} />
                </Card>
              </div>
            );
          })}
        </div>

        {/* Enhanced Process Flow */}
        <div className="text-center">
          <div className="relative group">
            {/* Enhanced Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/8 to-accent-secondary/8 dark:from-accent-primary/10 dark:to-accent-secondary/10 rounded-3xl blur-2xl opacity-50 dark:opacity-60 group-hover:opacity-75 dark:group-hover:opacity-100 transition-all duration-500" />
            
            <Card className="relative max-w-6xl mx-auto bg-white dark:bg-card/95 border-2 border-gray-400 dark:border-accent-primary/30 backdrop-blur-sm group-hover:border-gray-500 dark:group-hover:border-accent-primary/50 transition-all duration-500 overflow-hidden shadow-2xl dark:shadow-xl hover:shadow-3xl dark:hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary"></div>
              
              <CardContent className="py-12 px-8">
                <div className="flex items-center justify-center gap-4 mb-10">
                  <div className="p-3 rounded-full bg-gradient-to-r from-accent-primary/25 to-accent-secondary/25 dark:from-accent-primary/20 dark:to-accent-secondary/20 border border-accent-primary/50 dark:border-accent-primary/30 shadow-lg dark:shadow-md">
                    <Trophy className="w-8 h-8 text-accent-primary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-foreground">Competition <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent font-bold">Journey</span></h3>
                  <div className="p-3 rounded-full bg-gradient-to-r from-accent-secondary/25 to-accent-primary/25 dark:from-accent-secondary/20 dark:to-accent-primary/20 border border-accent-secondary/50 dark:border-accent-secondary/30 shadow-lg dark:shadow-md">
                    <Zap className="w-8 h-8 text-accent-secondary" />
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-muted-foreground mb-12 font-semibold max-w-2xl mx-auto leading-relaxed">
                  Your path to success through four carefully designed stages
                </p>
                
                <div className="flex flex-nowrap items-center justify-center gap-3 md:gap-5 overflow-x-auto">
                  {/* Online Test */}
                  <div className="flex flex-col items-center group/item hover:scale-105 transition-all duration-300">
                    <div className="relative mb-4">
                      <div className="absolute -inset-2 bg-blue-500/10 dark:bg-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover/item:opacity-60 dark:group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative p-4 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-600/20 dark:from-blue-500/20 dark:to-blue-600/10 border-2 border-blue-500/60 dark:border-blue-500/30 group-hover/item:border-blue-400/80 dark:group-hover/item:border-blue-400/50 group-hover/item:bg-blue-500/40 dark:group-hover/item:bg-blue-500/30 transition-all duration-300 shadow-xl dark:shadow-md group-hover/item:shadow-2xl dark:group-hover/item:shadow-lg">
                        <Monitor className="w-8 h-8 text-blue-500 dark:text-blue-400 group-hover/item:scale-110 transition-transform duration-300 drop-shadow-sm" />
                      </div>
                    </div>
                    <span className="text-gray-900 dark:text-foreground font-bold group-hover/item:text-blue-500 dark:group-hover/item:text-blue-400 transition-colors duration-300">Online Test</span>
                    <span className="text-xs text-gray-700 dark:text-muted-foreground/80 mt-1 font-bold">Eligibility Round</span>
                  </div>

                  <div className="hidden md:flex items-center gap-3">
                    <div className="w-12 h-px bg-gradient-to-r from-blue-400 to-purple-400"></div>
                    <ChevronRight className="w-6 h-6 text-accent-primary animate-pulse" />
                    <div className="w-12 h-px bg-gradient-to-r from-blue-400 to-purple-400"></div>
                  </div>

                  {/* Coding Marathon */}
                  <div className="flex flex-col items-center group/item hover:scale-105 transition-all duration-300">
                    <div className="relative mb-4">
                      <div className="absolute -inset-2 bg-purple-500/10 dark:bg-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover/item:opacity-60 dark:group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative p-4 rounded-2xl bg-gradient-to-br from-purple-500/30 to-purple-600/20 dark:from-purple-500/20 dark:to-purple-600/10 border-2 border-purple-500/60 dark:border-purple-500/30 group-hover/item:border-purple-400/80 dark:group-hover/item:border-purple-400/50 group-hover/item:bg-purple-500/40 dark:group-hover/item:bg-purple-500/30 transition-all duration-300 shadow-xl dark:shadow-md group-hover/item:shadow-2xl dark:group-hover/item:shadow-lg">
                        <Code2 className="w-8 h-8 text-purple-500 dark:text-purple-400 group-hover/item:scale-110 transition-transform duration-300 drop-shadow-sm" />
                      </div>
                    </div>
                    <span className="text-gray-900 dark:text-foreground font-bold group-hover/item:text-purple-500 dark:group-hover/item:text-purple-400 transition-colors duration-300">Coding Marathon</span>
                    <span className="text-xs text-gray-700 dark:text-muted-foreground/80 mt-1 font-bold">Top 100 Qualify</span>
                  </div>

                  <div className="hidden md:flex items-center gap-3">
                    <div className="w-12 h-px bg-gradient-to-r from-purple-400 to-emerald-400"></div>
                    <ChevronRight className="w-6 h-6 text-accent-secondary animate-pulse" style={{animationDelay: '1s'}} />
                    <div className="w-12 h-px bg-gradient-to-r from-purple-400 to-emerald-400"></div>
                  </div>

                  {/* Company Arena */}
                  <div className="flex flex-col items-center group/item hover:scale-105 transition-all duration-300">
                    <div className="relative mb-4">
                      <div className="absolute -inset-2 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-2xl blur-lg opacity-0 group-hover/item:opacity-60 dark:group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative p-4 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-emerald-600/20 dark:from-emerald-500/20 dark:to-emerald-600/10 border-2 border-emerald-500/60 dark:border-emerald-500/30 group-hover/item:border-emerald-400/80 dark:group-hover/item:border-emerald-400/50 group-hover/item:bg-emerald-500/40 dark:group-hover/item:bg-emerald-500/30 transition-all duration-300 shadow-xl dark:shadow-md group-hover/item:shadow-2xl dark:group-hover/item:shadow-lg">
                        <Users className="w-8 h-8 text-emerald-500 dark:text-emerald-400 group-hover/item:scale-110 transition-transform duration-300 drop-shadow-sm" />
                      </div>
                    </div>
                    <span className="text-gray-900 dark:text-foreground font-bold group-hover/item:text-emerald-500 dark:group-hover/item:text-emerald-400 transition-colors duration-300">Company Arena</span>
                    <span className="text-xs text-gray-700 dark:text-muted-foreground/80 mt-1 font-bold">Industry Problems</span>
                  </div>

                  <div className="hidden md:flex items-center gap-3">
                    <div className="w-12 h-px bg-gradient-to-r from-emerald-400 to-amber-400"></div>
                    <ChevronRight className="w-6 h-6 text-accent-primary animate-pulse" style={{animationDelay: '2s'}} />
                    <div className="w-12 h-px bg-gradient-to-r from-emerald-400 to-amber-400"></div>
                  </div>

                  {/* Final Victory */}
                  <div className="flex flex-col items-center group/item hover:scale-105 transition-all duration-300">
                    <div className="relative mb-4">
                      <div className="absolute -inset-2 bg-amber-500/10 dark:bg-amber-500/20 rounded-2xl blur-lg opacity-0 group-hover/item:opacity-60 dark:group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative p-4 rounded-2xl bg-gradient-to-br from-amber-500/30 to-amber-600/20 dark:from-amber-500/20 dark:to-amber-600/10 border-2 border-amber-500/60 dark:border-amber-500/30 group-hover/item:border-amber-400/80 dark:group-hover/item:border-amber-400/50 group-hover/item:bg-amber-500/40 dark:group-hover/item:bg-amber-500/30 transition-all duration-300 shadow-xl dark:shadow-md group-hover/item:shadow-2xl dark:group-hover/item:shadow-lg">
                        <Trophy className="w-8 h-8 text-amber-500 dark:text-amber-400 group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300 drop-shadow-sm" />
                      </div>
                    </div>
                    <span className="text-gray-900 dark:text-foreground font-bold group-hover/item:text-amber-500 dark:group-hover/item:text-amber-400 transition-colors duration-300">Final Victory</span>
                    <span className="text-xs text-gray-700 dark:text-muted-foreground/80 mt-1 font-bold">Win Internship</span>
                  </div>
                </div>
                
                {/* Bottom accent */}
                <div className="pt-8 mt-8 border-t border-border">
                  <p className="text-sm text-gray-700 dark:text-muted-foreground font-semibold">
                    Progress through each stage to unlock amazing opportunities
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rounds;