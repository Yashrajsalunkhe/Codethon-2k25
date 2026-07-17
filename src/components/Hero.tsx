import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users, Code, ArrowRight, Sparkles, Cpu, Terminal, ChevronDown, X, Clock, Gift } from "lucide-react";
import LogoImage from "@/img/logo.png";
import RightLogoImage from "@/img/right logo.png";
import { useState } from "react";

const Hero = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const cardDetails = {
    rounds: {
  title: "Competition Rounds",
  description: "The competition consists of 4 performance-based rounds designed to test your skills progressively.",
  details: [
    {
      round: "Round 1: Coding Eligibility Test",
      description: "Aptitude, technical MCQs and programming fundamentals.",
      duration: "90 minutes (10:00 AM - 1:00 PM IST)",
      type: "Online Screening Round",
      date: "28 Aug 26"
    },
    {
      round: "Round 2: Coding Marathon",
      description: "10 programming problems, solo coding, real-time leaderboard. Top 100 engineers qualify for Day 2.",
      duration: "3 hours (2:00 PM - 5:00 PM IST)",
      type: "Elimination Round",
      date: "28 Aug 26"
    },
    {
      round: "Round 3: Company Challenge Arena",
      description: "Choose your preferred company and solve real industry problems with live coding evaluation.",
      duration: "3 hours (10:00 AM - 1:00 PM IST)",
      type: "Industry Round",
      date: "29 Aug 26"
    },
    {
      round: "Round 4: Interviews & Internship Release",
      description: "Technical Interview (30-45 min) followed by HR Interview (20-30 min). Top performers receive an internship.",
      duration: "2:00 PM - 5:00 PM IST",
      type: "Final Round",
      date: "29 Aug 26"
    }
  ]
},
    languages: {
      title: "Programming Languages",
      description: "Choose your weapon! Code in any of these popular programming languages.",
      details: [
        {
          language: "C Programming",
          description: "The foundational language that powers system programming and competitive coding.",
          features: ["Fast execution", "Memory control", "System programming"],
          difficulty: "Beginner to Advanced"
        },
        {
          language: "C++",
          description: "Enhanced version of C with object-oriented features, widely used in competitive programming.",
          features: ["Object-oriented", "STL libraries", "High performance"],
          difficulty: "Intermediate to Advanced"
        },
        {
          language: "Python",
          description: "Versatile and readable language perfect for rapid prototyping and algorithm implementation.",
          features: ["Easy syntax", "Rich libraries", "Quick development"],
          difficulty: "Beginner to Advanced"
        },
        {
          language: "Java",
          description: "Object-oriented powerhouse used in enterprise applications and competitive programming.",
          features: ["Platform independent", "Strong OOP", "Robust ecosystem"],
          difficulty: "Intermediate to Advanced"
        }
      ]
    },
    internship: {
      title: "Winner Internship Program",
      description: "The top performer will receive an exclusive internship opportunity with industry mentorship.",
      details: [
        {
          benefit: "Internship cum Placement Opportunity",
          description: "Exciting internship cum placement opportunity for top performers with mentorship from industry leaders.",
          value: "Direct Industry Placement"
        },
        {
          benefit: "Industry Mentorship & Training",
          description: "Mentorship and training by industry leaders for winners with direct industry exposure.",
          value: "Professional Guidance"
        },
        {
          benefit: "Participation Certificate",
          description: "National-level participation certificate recognizing your coding expertise and competitive spirit.",
          value: "Career Recognition"
        },
        {
          benefit: "Industry Exposure",
          description: "Direct exposure to real-world industry problems and networking opportunities with IT professionals.",
          value: "Professional Network"
        }
      ]
    },
    eligibility: {
      title: "Eligibility Criteria",
      description: "This competition is exclusively designed for final year B.Tech students.",
      details: [
        {
          criteria: "Academic Standing",
          description: "Must be currently enrolled in final year (4th year) of B.Tech program graduating in 2026.",
          requirement: "B Tech Final Year (2026 Graduates)"
        },
        {
          criteria: "Participation Mode", 
          description: "Only individual participation is allowed. Team registrations are not permitted.",
          requirement: "Individual Participation Only"
        },
        {
          criteria: "Programming Knowledge",
          description: "Basic understanding of C, C++, Python, and Java programming languages with DSA fundamentals.",
          requirement: "C/C++/Python/Java Proficiency"
        },
        {
          criteria: "Registration Deadline",
          description: "Registrations open 1 Aug 2026 and close 21 Aug 2026, 11:59 PM IST.",
          requirement: "Register by 21 Aug 2026"
        }
      ]
    }
  };

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#institute-journey');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Consistent Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/5 dark:bg-accent-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/5 dark:bg-accent-secondary/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-muted/20 dark:bg-muted/30 rounded-full blur-2xl" />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent-primary/20 dark:bg-accent-primary/30 rounded-full animate-float" style={{animationDelay: '0s'}} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent-secondary/30 dark:bg-accent-secondary/40 rounded-full animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-accent-primary/15 dark:bg-accent-primary/20 rounded-full animate-float" style={{animationDelay: '4s'}} />
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-accent-secondary/20 dark:bg-accent-secondary/30 rounded-full animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-60 left-1/3 w-1 h-1 bg-accent-primary/25 dark:bg-accent-primary/40 rounded-full animate-float" style={{animationDelay: '3s'}} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          {/* Custom Header Design */}
          <div className="relative max-w-4xl mx-auto mb-8 mt-8 md:mt-12">
            <div className="relative group">
              {/* Background container with gradient */}
              <div className="relative bg-card/95 backdrop-blur-sm border border-border rounded-xl px-4 md:px-6 py-3 md:py-4 hover:border-accent-primary/30 transition-all duration-300 overflow-hidden shadow-lg dark:shadow-none">
                
                {/* Top and bottom accent lines */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-secondary via-accent-primary to-accent-secondary"></div>

                {/* Main content - responsive layout */}
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                  
                  {/* Logo */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/15 to-accent-secondary/15 dark:from-accent-primary/20 dark:to-accent-secondary/20 rounded-full blur-xl"></div>
                    <div className="relative w-16 h-16 md:w-24 md:h-24 bg-background border-2 border-accent-primary/50 hover:border-accent-primary/70 transition-all duration-300 shadow-xl dark:shadow-lg rounded-full p-2 md:p-3">
                      <img 
                        src={LogoImage} 
                        alt="ADCET Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* College Information - Mobile View */}
                  <div className="text-center flex-1 md:hidden">
                    <h3 className="text-red-600 dark:text-red-400 text-xs font-medium mb-1">
                      Sant Dnyaneshwar Shikshan Sanstha's
                    </h3>
                    <h2 className="text-red-700 dark:text-red-500 text-sm font-bold mb-1 leading-tight">
                      Annasaheb Dange College of Engineering and Technology (ADCET), Ashta
                    </h2>
                    <p className="text-muted-foreground text-xs mb-1 leading-relaxed">
                      An Empowered Autonomous Institute, affiliated to Shivaji University, Kolhapur
                    </p>
                  </div>

                  {/* College Information - Desktop View */}
                  <div className="text-center flex-1 hidden md:block">
                    <h3 className="text-red-600 dark:text-red-400 text-base font-medium mb-1">
                      Sant Dnyaneshwar Shikshan Sanstha's
                    </h3>
                    <h2 className="text-red-700 dark:text-red-500 text-lg font-bold mb-2 leading-tight">
                      Annasaheb Dange College of Engineering and Technology (ADCET), Ashta
                    </h2>
                    <p className="text-muted-foreground text-sm mb-1 leading-relaxed">
                      An Empowered Autonomous Institute, affiliated to Shivaji University, Kolhapur
                    </p>
                    <p className="text-muted-foreground text-sm mb-1">
                      Approved by AICTE, New Delhi & Govt. of Maharashtra
                    </p>
                    <div className="flex flex-row justify-center items-center gap-4 mt-2">
                      <p className="text-muted-foreground/80 text-xs">
                        Accredited by NAAC 'A+' Grade, Bangalore
                      </p>
                      <span className="text-muted-foreground/60">•</span>
                      <p className="text-accent-secondary text-xs font-medium">
                        Eligible Programs Accredited by NBA, New Delhi
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-3 left-3 w-1 h-1 bg-accent-primary rounded-full"></div>
                  <div className="absolute top-6 right-6 w-1 h-1 bg-accent-secondary rounded-full"></div>
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-accent-primary rounded-full"></div>
                  <div className="absolute bottom-3 right-3 w-1 h-1 bg-accent-secondary rounded-full"></div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary/3 to-accent-secondary/3 dark:from-accent-primary/5 dark:to-accent-secondary/5 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
          
          {/* Main Title */}
          <div className="mb-12 relative">
            {/* Decorative elements */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent" />
            
            <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-light leading-[1.1] animate-fade-in-up">
              
              <span className="bg-gradient-to-r py-4 from-[#FF7A01] via-[#FFB366] to-[#727889] text-transparent bg-clip-text font-mono">Codathon</span>
              <br />
              
              <span className="bg-gradient-to-r py-4 from-[#0767FB] to-[#4A90E2] text-transparent bg-clip-text font-mono">2026</span>
            </h1>
            
            {/* Code-themed decorations */}
            <div className="absolute -right-10 top-10 opacity-30 hidden lg:block">
              <Cpu className="w-8 h-8 text-accent-primary animate-pulse" />
            </div>
            <div className="absolute -left-10 bottom-10 opacity-30 hidden lg:block">
              <Terminal className="w-6 h-6 text-accent-secondary animate-bounce" style={{animationDelay: '2s'}} />
            </div>
          </div>

          {/* Tagline */}
          <div className="relative">
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 dark:text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed px-4">
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent font-medium">Unleash Your Inner Coder:</span>
              <br className="hidden sm:inline" />
              <span className="text-foreground/70 dark:text-muted-foreground/80"> Compete, Create, Conquer</span>
            </p>

            {/* Prize Pool Banner */}
            <div className="mt-6 max-w-md mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-emerald-50/90 dark:bg-emerald-950/50 border-2 border-emerald-500/30 hover:border-emerald-500/50 rounded-full px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center gap-3">
                    <Gift className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-300 font-semibold text-lg">₹10,000 Prize Pool</span>
                    <Gift className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>


            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-accent-secondary to-transparent" />
          </div>
          
          {/* College Info */}
          {/* <div className="space-y-4 pt-8 relative">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 max-w-2xl mx-auto">
              <h2 className="text-lg md:text-xl font-medium text-foreground mb-2">
                Annasaheb Dange College of Engineering and Technology
              </h2>
              <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-accent-secondary rounded-full animate-pulse" />
                Ashta • An Autonomous Institute
                <span className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" style={{animationDelay: '1s'}} />
              </p>
            </div>
          </div> */}

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto pt-4 px-4">
            <div className="group relative cursor-pointer" onClick={() => setSelectedCard('rounds')}>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 dark:from-accent-primary/10 dark:to-accent-secondary/10 rounded-xl blur-xl group-hover:blur-2xl group-hover:from-accent-primary/10 group-hover:to-accent-secondary/10 dark:group-hover:from-accent-primary/15 dark:group-hover:to-accent-secondary/15 transition-all duration-300" />
              <div className="relative bg-card/90 dark:bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 md:p-6 hover:border-accent-primary/50 dark:hover:border-accent-primary/30 transition-all duration-300 hover:transform hover:scale-105 shadow-lg dark:shadow-none hover:shadow-xl dark:hover:shadow-none h-32 md:h-36 flex flex-col justify-center items-center">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-accent-primary mx-auto mb-2 md:mb-3 group-hover:rotate-12 transition-transform duration-300" />
                <div className="text-2xl md:text-3xl font-light text-foreground mb-1">3</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium text-center">Rounds</div>
              </div>
            </div>
            
            <div className="group relative cursor-pointer" onClick={() => setSelectedCard('languages')}>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-secondary/5 to-accent-primary/5 dark:from-accent-secondary/10 dark:to-accent-primary/10 rounded-xl blur-xl group-hover:blur-2xl group-hover:from-accent-secondary/10 group-hover:to-accent-primary/10 dark:group-hover:from-accent-secondary/15 dark:group-hover:to-accent-primary/15 transition-all duration-300" />
              <div className="relative bg-card/90 dark:bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 md:p-6 hover:border-accent-secondary/50 dark:hover:border-accent-secondary/30 transition-all duration-300 hover:transform hover:scale-105 shadow-lg dark:shadow-none hover:shadow-xl dark:hover:shadow-none h-32 md:h-36 flex flex-col justify-center items-center">
                <Code className="w-6 h-6 md:w-8 md:h-8 text-accent-secondary mx-auto mb-2 md:mb-3 group-hover:rotate-12 transition-transform duration-300" />
                <div className="text-sm md:text-base font-light text-foreground mb-1 text-center">C • Python • Java</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium text-center">Languages</div>
              </div>
            </div>
            
            <div className="group relative cursor-pointer" onClick={() => setSelectedCard('internship')}>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 dark:from-accent-primary/10 dark:to-accent-secondary/10 rounded-xl blur-xl group-hover:blur-2xl group-hover:from-accent-primary/10 group-hover:to-accent-secondary/10 dark:group-hover:from-accent-primary/15 dark:group-hover:to-accent-secondary/15 transition-all duration-300" />
              <div className="relative bg-card/90 dark:bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 md:p-6 hover:border-accent-primary/50 dark:hover:border-accent-primary/30 transition-all duration-300 hover:transform hover:scale-105 shadow-lg dark:shadow-none hover:shadow-xl dark:hover:shadow-none h-32 md:h-36 flex flex-col justify-center items-center">
                <Trophy className="w-6 h-6 md:w-8 md:h-8 text-accent-primary mx-auto mb-2 md:mb-3 group-hover:rotate-12 transition-transform duration-300" />
                <div className="text-2xl md:text-3xl font-light text-foreground mb-1">Winner</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium text-center">Internship</div>
              </div>
            </div>
            
            <div className="group relative cursor-pointer" onClick={() => setSelectedCard('eligibility')}>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-secondary/5 to-accent-primary/5 dark:from-accent-secondary/10 dark:to-accent-primary/10 rounded-xl blur-xl group-hover:blur-2xl group-hover:from-accent-secondary/10 group-hover:to-accent-primary/10 dark:group-hover:from-accent-secondary/15 dark:group-hover:to-accent-primary/15 transition-all duration-300" />
              <div className="relative bg-card/90 dark:bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 md:p-6 hover:border-accent-secondary/50 dark:hover:border-accent-secondary/30 transition-all duration-300 hover:transform hover:scale-105 shadow-lg dark:shadow-none hover:shadow-xl dark:hover:shadow-none h-32 md:h-36 flex flex-col justify-center items-center">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-accent-secondary mx-auto mb-2 md:mb-3 group-hover:rotate-12 transition-transform duration-300" />
                <div className="text-2xl md:text-3xl font-light text-foreground mb-1">B.Tech</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium text-center">Final Year Only</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-04">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-50 dark:opacity-70" />
              <Button 
                variant="default" 
                size="lg" 
                className="relative px-10 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary/90 hover:to-accent-secondary/90 text-white font-medium text-lg rounded-xl transition-all duration-300 group-hover:scale-105 shadow-xl"
                onClick={() => window.open('https://unstop.com/p/codathon-2026-annasaheb-dange-college-of-engineering-and-technolgy-1532053', '_blank')}
              >
                Register Now
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            
            <div className="relative inline-block p-[1px] rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-10 py-4 bg-background/95 dark:bg-background/80 backdrop-blur-sm border-0 text-foreground/80 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground font-medium text-base rounded-xl transition-all duration-300 hover:scale-105 hover:bg-background/100 dark:hover:bg-background/90 shadow-lg dark:shadow-none"
                onClick={scrollToNextSection}
              >
                About College
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal for Card Details */}
      {selectedCard && (
        <div 
          className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCard(null)}
        >
          <div 
            className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fixed Floating Close Button */}
            <button
              onClick={() => setSelectedCard(null)}
              className="fixed top-6 right-6 p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-500 transition-all duration-200 z-[60] shadow-lg group"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-red-500 transition-colors" />
            </button>

            <div className="p-6 md:p-8">
              {/* Modal Header */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {cardDetails[selectedCard as keyof typeof cardDetails].title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-relaxed">
                  {cardDetails[selectedCard as keyof typeof cardDetails].description}
                </p>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                {selectedCard === 'rounds' && (
                  <div className="grid gap-6">
                    {cardDetails.rounds.details.map((round, index) => (
                      <div key={index} className="group relative">
                        <div className="relative bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-750 transition-all duration-300 hover:transform hover:scale-[1.01] shadow-sm hover:shadow-md">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{round.round}</h3>
                            <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                              {round.type}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 font-normal leading-relaxed mb-4">{round.description}</p>
                          <div className="flex items-center gap-4 text-sm text-blue-600 dark:text-blue-400 font-medium">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {round.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {round.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {selectedCard === 'languages' && (
                  <div className="grid gap-6">
                    {cardDetails.languages.details.map((lang, index) => (
                      <div key={index} className="group relative">
                        <div className="relative bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-750 transition-all duration-300 hover:transform hover:scale-[1.01] shadow-sm hover:shadow-md">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{lang.language}</h3>
                            <span className="px-3 py-1 text-xs bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded-full font-medium">
                              {lang.difficulty}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 font-normal leading-relaxed mb-4">{lang.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {lang.features.map((feature, idx) => (
                              <span key={idx} className="px-3 py-1 text-xs bg-emerald-50 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-full font-medium border border-emerald-200 dark:border-emerald-700">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {selectedCard === 'internship' && (
                  <div className="grid gap-6">
                    {cardDetails.internship.details.map((benefit, index) => (
                      <div key={index} className="group relative">
                        <div className="relative bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-750 transition-all duration-300 hover:transform hover:scale-[1.01] shadow-sm hover:shadow-md">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{benefit.benefit}</h3>
                            <span className="px-3 py-1 text-xs bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 rounded-full font-medium">
                              {benefit.value}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 font-normal leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {selectedCard === 'eligibility' && (
                  <div className="grid gap-6">
                    {cardDetails.eligibility.details.map((criteria, index) => (
                      <div key={index} className="group relative">
                        <div className="relative bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-750 transition-all duration-300 hover:transform hover:scale-[1.01] shadow-sm hover:shadow-md">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{criteria.criteria}</h3>
                            <span className="px-3 py-1 text-xs bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 rounded-full font-medium">
                              Required
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 font-normal leading-relaxed mb-3">{criteria.description}</p>
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 text-xs bg-violet-50 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 rounded-full font-medium border border-violet-200 dark:border-violet-700">
                              {criteria.requirement}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-50 dark:opacity-70" />
                    <Button
                      onClick={() => window.open('https://unstop.com/p/codathon-2026-annasaheb-dange-college-of-engineering-and-technolgy-1532053', '_blank')}
                      className="relative px-10 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary/90 hover:to-accent-secondary/90 text-white font-medium text-lg rounded-xl transition-all duration-300 group-hover:scale-105 shadow-xl"
                    >
                      Register for Competition
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-accent-primary/20 dark:via-accent-primary/30 to-transparent animate-float"></div>
      <div className="absolute bottom-1/4 left-10 w-px h-24 bg-gradient-to-b from-transparent via-accent-secondary/20 dark:via-accent-secondary/30 to-transparent animate-float" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/3 left-1/4 w-px h-16 bg-gradient-to-b from-transparent via-accent-primary/15 dark:via-accent-primary/20 to-transparent animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 right-1/4 w-px h-20 bg-gradient-to-b from-transparent via-accent-secondary/15 dark:via-accent-secondary/20 to-transparent animate-float" style={{animationDelay: '4s'}}></div>
      
      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToNextSection}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent-primary transition-colors duration-300 group"
        >
          <span className="text-sm font-light">Explore</span>
          <div className="p-2 rounded-full border border-neutral-600 group-hover:border-accent-primary/50 transition-colors duration-300">
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </div>
        </button>
      </div> */}
    </div>
  );
};

export default Hero;