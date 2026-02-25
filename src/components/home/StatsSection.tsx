import { useEffect, useState, useRef } from "react";
import { Briefcase, Star, Users, Award } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: 150000,
    suffix: "+",
    label: "Projects Done",
    color: "text-primary",
  },
  {
    icon: Star,
    value: 25000,
    suffix: "+",
    label: "Happy Clients",
    color: "text-accent",
  },
  {
    icon: Users,
    value: 120,
    suffix: "+",
    label: "Expert Staff",
    color: "text-primary",
  },
  {
    icon: Award,
    value: 50,
    suffix: "+",
    label: "Win Awards",
    color: "text-accent",
  },
];

const formatNumber = (num: number): string => {
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + "K";
  }
  return num.toString();
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timers = stats.map((stat, index) => {
      const increment = stat.value / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timers[index]);
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, interval);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stats-item group"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-muted ${stat.color} pulse-icon`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className={`stats-number ${stat.color}`}>
                {formatNumber(counters[index])}{stat.suffix}
              </div>
              <p className="text-muted-foreground font-medium mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
