import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle, Users, Monitor, Clock, UserCheck, BookOpen, Trophy, Shield, Star } from "lucide-react";

const Rules = () => {
  const keyRules = [
    {
      category: "Eligibility",
      icon: Users,
      color: "accent-primary",
      rules: [
        "Only B.Tech students graduating in 2026",
        "Individual participation only",
        "50/- Rs registration fee",
        "All engineering branches eligible"
      ]
    },
    {
      category: "Round Structure",
      icon: Monitor,
      color: "accent-secondary", 
      rules: [
      "Round I & II: Coding Eligibility Test + Marathon (Top 100 qualify)",
      "Round III: Company Challenge Arena",
      "Round IV: Technical + HR Interview"
      ]
    },
    {
      category: "Important Rules",
      icon: AlertCircle,
      color: "red-400",
      rules: [
        "Absence in Round I = Elimination",
        "Round II & III conducted offline",
        "Registration deadline: 21 Aug 2026"
      ]
    },
    {
      category: "Rewards",
      icon: Trophy,
      color: "yellow-400",
      rules: [
        "Internship cum placement opportunity",
        "Industry mentorship for winners",
        "National-level certificates"
      ]
    }
  ];

  return (
    <section className=" relative overflow-hidden">
      {/* Enhanced Background for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background/60" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent-primary/3 dark:bg-accent-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent-secondary/3 dark:bg-accent-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Simple Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
            Competition <span className="font-mono text-accent-primary bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Rules</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Essential guidelines you must follow to participate
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent mx-auto mt-8" />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Enhanced Rules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {keyRules.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="bg-white/95 dark:bg-card border-2 border-border/60 dark:border-border hover:border-accent-primary/60 dark:hover:border-accent-primary/50 transition-colors duration-300 shadow-xl dark:shadow-lg hover:shadow-2xl dark:hover:shadow-xl backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-accent-primary/15 dark:bg-accent-primary/10 border border-accent-primary/30 dark:border-accent-primary/20 shadow-md dark:shadow-sm">
                        <IconComponent className="w-5 h-5 text-accent-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {category.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3">
                      {category.rules.map((rule, ruleIndex) => (
                        <li key={ruleIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent-secondary mt-2 flex-shrink-0 shadow-sm" />
                          <span className="text-foreground/90 dark:text-foreground/90 leading-relaxed font-semibold text-sm">
                            {rule}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Enhanced Important Notice */}
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-500/10 dark:to-orange-500/10 border-2 border-red-500/50 dark:border-red-500/30 shadow-xl dark:shadow-lg">
            <CardContent className="py-8 px-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-red-500/30 dark:bg-red-500/20 border border-red-500/50 dark:border-red-500/40 flex-shrink-0 shadow-lg dark:shadow-md">
                  <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    ⚠️ Critical Requirements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500 dark:bg-red-400" />
                        <span className="text-lg font-bold text-red-700 dark:text-red-200">
                          Only B.Tech Final Year Students
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500 dark:bg-red-400" />
                        <span className="text-lg font-bold text-red-700 dark:text-red-200">
                          Round I Attendance is Mandatory
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500 dark:bg-red-400" />
                        <span className="text-lg font-bold text-red-700 dark:text-red-200">
                          Individual Participation Only
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500 dark:bg-red-400" />
                        <span className="text-lg font-bold text-red-700 dark:text-red-200">
                          Only C, C++ ,Java ,Python are Allowed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Competition Flow */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h3 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
                Competition <span className="font-mono text-accent-primary bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Flow</span>
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
                Your journey through the three-round competition process
              </p>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent mx-auto mt-8" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center border-2 border-green-500/50 dark:border-green-500/30 bg-green-50/80 dark:bg-green-500/5 shadow-xl dark:shadow-lg hover:shadow-2xl dark:hover:shadow-xl transition-all duration-300">
                <CardContent className="py-8">
                  <div className="w-12 h-12 rounded-full bg-green-500/30 dark:bg-green-500/20 border-2 border-green-500/60 dark:border-green-500/40 flex items-center justify-center mx-auto mb-4 shadow-lg dark:shadow-md">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">1</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Round I</h4>
                  <p className="text-green-600 dark:text-green-300 font-bold mb-2">Online MCQ</p>
                  <p className="text-sm text-foreground/80 dark:text-muted-foreground font-semibold">Elimination round</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-yellow-500/50 dark:border-yellow-500/30 bg-yellow-50/80 dark:bg-yellow-500/5 shadow-xl dark:shadow-lg hover:shadow-2xl dark:hover:shadow-xl transition-all duration-300">
                <CardContent className="py-8">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/30 dark:bg-yellow-500/20 border-2 border-yellow-500/60 dark:border-yellow-500/40 flex items-center justify-center mx-auto mb-4 shadow-lg dark:shadow-md">
                    <span className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">2</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Round II</h4>
                  <p className="text-yellow-600 dark:text-yellow-300 font-bold mb-2">Offline Coding</p>
                  <p className="text-sm text-foreground/80 dark:text-muted-foreground font-semibold">Problem-Solving round</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-accent-primary/50 dark:border-accent-primary/30 bg-blue-50/80 dark:bg-accent-primary/5 shadow-xl dark:shadow-lg hover:shadow-2xl dark:hover:shadow-xl transition-all duration-300">
                <CardContent className="py-8">
                  <div className="w-12 h-12 rounded-full bg-accent-primary/30 dark:bg-accent-primary/20 border-2 border-accent-primary/60 dark:border-accent-primary/40 flex items-center justify-center mx-auto mb-4 shadow-lg dark:shadow-md">
                    <span className="text-2xl font-bold text-accent-primary">3</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Round III</h4>
                  <p className="text-accent-primary font-bold mb-2">Final Assessment</p>
                  <p className="text-sm text-foreground/80 dark:text-muted-foreground font-semibold">IT Industries Problems</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;