import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CountdownTimer from "./CountdownTimer";
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  Download,
  Plus,
  Bell,
  Globe,
  Smartphone,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Info
} from "lucide-react";

const EventCalendarIntegration = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const events = [
    {
      id: "round1",
      title: "Round 1: Red Light Green Light (Online MCQ)",
      date: "2025-09-08",
      time: "11:00 AM - 7:00 PM",
      duration: "8 hours",
      location: "Online Platform",
      type: "online",
      status: "upcoming",
      description: "Online MCQ test covering basic programming concepts in C, C++, Python, and Java. Top 200+ participants qualify for Round 2.",
      details: [
        "8 hours duration",
        "Multiple choice questions",
        "C, C++, Python, Java concepts",
        "200+ qualifiers for next round",
        "National level participation"
      ],
      preparation: [
        "Review basic programming concepts",
        "Practice MCQs on data structures",
        "Brush up on language syntax",
        "Test your internet connection"
      ]
    },
    {
      id: "round2",
      title: "Round 2: Battle Arena (Offline Coding)",
      date: "2025-09-15",
      time: "10:00 AM - 1:00 PM",
      duration: "3 hours",
      location: "ADCET Campus, Ashta, Sangli",
      type: "offline",
      status: "upcoming",
      description: "Offline coding round focusing on Data Structures and Algorithms. Top 50 participants qualify for the final round.",
      details: [
        "3 hours intensive coding",
        "DSA problem solving",
        "On-campus competition",
        "50 finalists selected",
        "Real-time evaluation"
      ],
      preparation: [
        "Master DSA concepts",
        "Practice competitive programming",
        "Solve previous year problems",
        "Plan travel to campus"
      ]
    },
    {
      id: "round3",
      title: "Round 3: Victory Quest (Final Round)",
      date: "2025-09-15",
      time: "2:00 PM - 5:00 PM",
      duration: "3 hours",
      location: "ADCET Campus, Ashta, Sangli",
      type: "offline",
      status: "upcoming",
      description: "Final coding round evaluated by IT Industries with industry-based problems. Winners receive internship opportunities.",
      details: [
        "Industry-level problems",
        "IT Industries evaluation",
        "Internship opportunities",
        "Championship titles",
        "Professional networking"
      ],
      preparation: [
        "Study real-world problems",
        "Understand industry practices",
        "Perfect your coding style",
        "Prepare for interviews"
      ]
    }
  ];

  const generateCalendarLink = (event: any, type: 'google' | 'outlook' | 'apple' | 'ics') => {
    const startDate = new Date(`${event.date}T${event.time.split(' - ')[0].includes('AM') ? '11:00:00' : '14:00:00'}`);
    const endTime = event.time.split(' - ')[1];
    const endDate = new Date(startDate);
    
    // Calculate end time based on duration
    if (event.duration.includes('8 hours')) {
      endDate.setHours(endDate.getHours() + 8);
    } else {
      endDate.setHours(endDate.getHours() + 3);
    }

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const title = encodeURIComponent(`Codathon 2026 - ${event.title}`);
    const description = encodeURIComponent(`${event.description}\n\nLocation: ${event.location}\nDuration: ${event.duration}\n\nFor more info: https://codathon2025.adcet.ac.in`);
    const location = encodeURIComponent(event.location);

    switch (type) {
      case 'google':
        return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${description}&location=${location}`;
      
      case 'outlook':
        return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${title}&startdt=${formatDate(startDate)}&enddt=${formatDate(endDate)}&body=${description}&location=${location}`;
      
      case 'apple':
        return `data:text/calendar;charset=utf8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:https://codathon2025.adcet.ac.in
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;
      
      case 'ics':
        const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Codathon 2026//EN
BEGIN:VEVENT
UID:${event.id}@codathon2026.adcet.ac.in
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:Codathon 2026 - ${event.title}
DESCRIPTION:${event.description}\\n\\nLocation: ${event.location}\\nDuration: ${event.duration}
LOCATION:${event.location}
BEGIN:VALARM
TRIGGER:-PT1H
DESCRIPTION:Codathon 2026 reminder - ${event.title} starts in 1 hour
ACTION:DISPLAY
END:VALARM
END:VEVENT
END:VCALENDAR`;
        
        const blob = new Blob([icsContent], { type: 'text/calendar' });
        return URL.createObjectURL(blob);
      
      default:
        return '';
    }
  };

  const downloadICS = (event: any) => {
    const link = generateCalendarLink(event, 'ics');
    const a = document.createElement('a');
    a.href = link;
    a.download = `codathon-2025-${event.id}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(link);
  };

  const addToCalendar = (event: any, type: 'google' | 'outlook') => {
    const link = generateCalendarLink(event, type);
    window.open(link, '_blank');
  };

  return (
    <section id="calendar" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/10 to-background" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}} />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Event Calendar</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Mark Your 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
              Calendar
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Never miss a moment! Add Codathon 2026 events to your calendar and stay prepared
          </p>
        </div>

        {/* Quick Calendar Actions */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            onClick={() => {
              events.forEach(event => addToCalendar(event, 'google'));
            }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add All to Google Calendar
          </Button>
          
          <Button
            variant="outline"
            onClick={() => {
              const allEvents = events.map(event => generateCalendarLink(event, 'ics')).join('\n');
              // For simplicity, download the first event's ICS as a demo
              downloadICS(events[0]);
            }}
            className="border-accent-primary text-accent-primary hover:bg-accent-primary/10"
          >
            <Download className="w-4 h-4 mr-2" />
            Download All Events (.ics)
          </Button>
        </div>

        {/* Countdown to Next Event */}
        <div className="max-w-md mx-auto mb-16">
          <CountdownTimer 
            targetDate="2026-09-05T11:00:00"
            title="Time Until Codathon 2026 Begins"
          />
        </div>

        {/* Events Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {events.map((event, index) => (
              <Card 
                key={event.id}
                className={`border transition-all duration-300 hover:shadow-lg ${
                  selectedEvent === event.id 
                    ? 'border-accent-primary/50 bg-accent-primary/5' 
                    : 'border-border hover:border-accent-primary/30'
                }`}
              >
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-full blur-md" />
                          <div className="relative w-12 h-12 bg-background border-2 border-accent-primary/50 rounded-full flex items-center justify-center">
                            <span className="text-lg font-bold text-accent-primary">{index + 1}</span>
                          </div>
                        </div>
                        <div>
                          <CardTitle className="text-xl text-foreground">{event.title}</CardTitle>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(event.date).toLocaleDateString('en-US', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <Badge variant={event.type === 'online' ? 'secondary' : 'default'}>
                          {event.type === 'online' ? 'Online' : 'Offline'}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <Badge 
                        variant="outline" 
                        className="border-green-500 text-green-600 dark:text-green-400"
                      >
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                {selectedEvent === event.id && (
                  <CardContent className="pt-0">
                    <div className="border-t border-border pt-6">
                      
                      {/* Event Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Event Details & Preparation */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="flex items-center gap-2 font-semibold text-foreground mb-3">
                            <Info className="w-4 h-4 text-blue-500" />
                            Event Details
                          </h4>
                          <ul className="space-y-2">
                            {event.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-accent-primary rounded-full" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="flex items-center gap-2 font-semibold text-foreground mb-3">
                            <AlertCircle className="w-4 h-4 text-orange-500" />
                            Preparation Tips
                          </h4>
                          <ul className="space-y-2">
                            {event.preparation.map((tip, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-accent-secondary rounded-full" />
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Calendar Integration Buttons */}
                      <div className="border-t border-border pt-6">
                        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-accent-primary" />
                          Add to Your Calendar
                        </h4>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => addToCalendar(event, 'google')}
                            className="flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-950"
                          >
                            <Globe className="w-4 h-4" />
                            Google
                          </Button>
                          
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => addToCalendar(event, 'outlook')}
                            className="flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-950"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Outlook
                          </Button>
                          
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => downloadICS(event)}
                            className="flex items-center gap-2 hover:bg-green-50 dark:hover:bg-green-950"
                          >
                            <Smartphone className="w-4 h-4" />
                            Apple
                          </Button>
                          
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => downloadICS(event)}
                            className="flex items-center gap-2 hover:bg-purple-50 dark:hover:bg-purple-950"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </Button>
                        </div>
                        
                        <div className="mt-3 p-3 bg-muted/50 rounded-lg">
                          <p className="text-xs text-muted-foreground flex items-center gap-2">
                            <Bell className="w-3 h-3" />
                            <span>Calendar events include automatic reminders 1 hour before each round</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Calendar Features */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Smart Reminders</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Get automatic notifications on your phone and computer. Never miss an important deadline or event timing.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Share with Team</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Share calendar events with your study group or coding partners. Collaborate and prepare together for success.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventCalendarIntegration;
