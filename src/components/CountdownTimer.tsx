import { useState, useEffect } from "react";
import { Clock, Calendar } from "lucide-react";

interface CountdownTimerProps {
  targetDate: string; // Format: "2026-09-08T00:09:00"
  title: string;
}

const CountdownTimer = ({ targetDate, title }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setIsExpired(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isExpired) {
    return (
      <div className="text-center p-6 border border-border rounded-xl bg-card">
        <Calendar className="w-8 h-8 text-accent-primary mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-green-500 font-medium">Event Started!</p>
      </div>
    );
  }

  return (
    <div className="text-center p-6 border border-border rounded-xl bg-card hover:border-accent-primary/30 transition-colors">
      <Clock className="w-8 h-8 text-accent-primary mx-auto mb-3" />
      <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      
      <div className="grid grid-cols-4 gap-4">
        {[
          { value: timeLeft.days, label: "Days" },
          { value: timeLeft.hours, label: "Hours" },
          { value: timeLeft.minutes, label: "Minutes" },
          { value: timeLeft.seconds, label: "Seconds" }
        ].map((item, index) => (
          <div key={index} className="text-center">
            <div className="w-12 h-12 mx-auto bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30 rounded-lg flex items-center justify-center mb-2">
              <span className="text-xl font-bold text-foreground">
                {item.value.toString().padStart(2, '0')}
              </span>
            </div>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
