import { useEffect, useState } from "react";
import { Code, Cpu, Terminal } from "lucide-react";
import LogoImage from "@/img/logo.png";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    { icon: Code, text: "Initializing Competition Platform..." },
    { icon: Cpu, text: "Loading Programming Environment..." },
    { icon: Terminal, text: "Preparing Challenge Arena..." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % loadingSteps.length);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-full blur-xl animate-pulse"></div>
          <div className="relative w-20 h-20 mx-auto bg-background border-2 border-accent-primary/50 rounded-full p-3 shadow-xl">
            <img 
              src={LogoImage} 
              alt="ADCET Logo" 
              className="w-full h-full object-contain animate-pulse"
            />
          </div>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            <span className="font-audiowide text-accent-primary">Codathon</span>
            <span className="text-accent-secondary ml-2">2026</span>
          </h1>
          <p className="text-muted-foreground">ADCET Programming Competition</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-right mt-2">
            <span className="text-sm text-muted-foreground">{progress}%</span>
          </div>
        </div>

        {/* Loading Steps */}
        <div className="space-y-3">
          {loadingSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = index === currentStep;
            const isCompleted = progress > (index + 1) * 33;
            
            return (
              <div 
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'bg-accent/20 border border-accent-primary/30' 
                    : isCompleted 
                      ? 'bg-green-500/10 border border-green-500/30' 
                      : 'bg-muted/50 border border-transparent'
                }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-accent-primary/20 text-accent-primary' 
                    : isCompleted 
                      ? 'bg-green-500/20 text-green-500' 
                      : 'bg-muted text-muted-foreground'
                }`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className={`text-sm transition-colors ${
                  isActive 
                    ? 'text-foreground font-medium' 
                    : isCompleted 
                      ? 'text-green-500' 
                      : 'text-muted-foreground'
                }`}>
                  {step.text}
                </span>
                {isActive && (
                  <div className="ml-auto">
                    <div className="w-4 h-4 border-2 border-accent-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                {isCompleted && (
                  <div className="ml-auto">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-1 bg-white rounded-full rotate-45 translate-x-0.5" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Loading Animation */}
        <div className="mt-8 flex justify-center">
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-accent-primary rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
