import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Play, 
  Trophy, 
  Users, 
  Calendar,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  Award,
  Code,
  Zap
} from "lucide-react";

const PastEventGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const pastEvents = [
  {
    year: "2025",
    title: "Codathon 2025: Level Up",
    date: "September, 2025",
    participants: 500,
    location: "ADCET Campus, Ashta",
    highlights: [
      "1000+ participants",
      "Multiple colleges represented",
      "Internship opportunities",
      "Industry partnership with IT Industries"
    ],
    images: [
      {
        url: "/EventGallery/2025-event1.jpeg",
        caption: "Codathon 2025 - Participant registration",
        type: "image"
      },
      {
        url: "/EventGallery/2025-event2.jpeg",
        caption: "Participants engaged in intense coding sessions",
        type: "image"
      },
      {
        url: "/EventGallery/2025-event3.jpeg",
        caption: "Competition environment and focused programming",
        type: "image"
      },
      {
        url: "/EventGallery/2025-event4.jpeg",
        caption: "Award ceremony and winner announcements",
        type: "image"
      },
      {
        url: "/EventGallery/2025-event5.jpeg",
        caption: "Technical presentations and knowledge sharing",
        type: "image"
      },
      {
        url: "/EventGallery/2025-event6.jpeg",
        caption: "Memorable moments and group celebrations",
        type: "image"
      }
    ],
    video: {
      url: "/EventGallery/2025-event.mp4",
      thumbnail: "/EventGallery/2025-event1.jpeg",
      caption: "Codathon 2025 - Official Event Highlights",
      duration: "0.07"
    }
  },
  {
    year: "2024",
    title: "Codathon 2024: The Ultimate Coding Battle",
    date: "September, 2024",
    participants: 500,
    location: "ADCET Campus, Ashta",
    highlights: [
      "Record 1000 + participants",
      "Many colleges represented", 
      "Internship opportunities",
      "Industry partnership with IT Industries"
    ],
    images: [
      {
        url: "/EventGallery/event1.jpeg",
        caption: "Codathon 2024 - Participant registration",
        type: "image"
      },
      {
        url: "/EventGallery/event2.jpeg",
        caption: "Participants engaged in intense coding sessions",
        type: "image"
      },
      {
        url: "/EventGallery/event3.jpeg",
        caption: "Competition environment and focused programming",
        type: "image"
      },
      {
        url: "/EventGallery/event4.jpeg",
        caption: "Award ceremony and winner announcements",
        type: "image"
      },
      {
        url: "/EventGallery/event5.jpeg",
        caption: "Technical presentations and knowledge sharing",
        type: "image"
      },
      {
        url: "/EventGallery/event6.jpeg",
        caption: "Memorable moments and group celebrations",
        type: "image"
      }
    ],
    video: {
      url: "/EventGallery/event.mp4",
      thumbnail: "/EventGallery/event1.jpeg",
      caption: "Codathon 2024 - Official Event Highlights",
      duration: "0.07"
    }
  }
];

  const allImages = pastEvents.flatMap(event => 
    event.images.map(img => ({ ...img, eventYear: event.year, eventTitle: event.title }))
  );

  const openLightbox = (media: any, index?: number) => {
    setSelectedMedia(media);
    if (index !== undefined) {
      setCurrentImageIndex(index);
    }
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => prev > 0 ? prev - 1 : allImages.length - 1);
    } else {
      setCurrentImageIndex(prev => prev < allImages.length - 1 ? prev + 1 : 0);
    }
  };

  return (
    <>
      
      <section id="gallery" className="py-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      
        
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Camera className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Event Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Event
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Gallery
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Relive the excitement and energy from our previous Codathon competitions
            </p>
        </div>

        {/* Events Timeline */}
        {pastEvents.map((event, eventIndex) => (
          <div key={eventIndex} className="mb-20">
            
            {/* Event Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-full blur-lg" />
                <div className="relative w-16 h-16 bg-background border-2 border-accent-primary/50 rounded-full flex items-center justify-center p-2">
                  <img 
                    src="/favicon.png" 
                    alt="Codathon Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{event.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{event.participants}+ participants</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {event.highlights.map((highlight, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4 text-center hover:border-accent-primary/30 transition-colors">
                  <div className="w-8 h-8 mx-auto mb-2 text-accent-primary">
                    {index === 0 && <Users className="w-full h-full" />}
                    {index === 1 && <Trophy className="w-full h-full" />}
                    {index === 2 && <Award className="w-full h-full" />}
                    {index === 3 && <Code className="w-full h-full" />}
                  </div>
                  <p className="text-sm text-muted-foreground">{highlight}</p>
                </div>
              ))}
            </div>

            {/* Media Gallery */}
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              
              {/* Video Thumbnail - Takes up 2 columns on larger screens */}
              <div 
                className="relative group cursor-pointer rounded-xl overflow-hidden border border-border hover:border-accent-primary/50 transition-all duration-300 md:col-span-2"
                onClick={() => openLightbox(event.video)}
              >
                <div className="aspect-video relative">
                  <img 
                    src={event.video.thumbnail} 
                    alt={event.video.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-8 h-8 text-white ml-1 drop-shadow-lg" />
                    </div>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-red-600/90 text-white border-none flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    {event.video.duration}
                  </Badge>
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                    ▶ Click to Play Video
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-foreground line-clamp-2">{event.video.caption}</p>
                  <p className="text-xs text-muted-foreground mt-1">Official event highlights and memorable moments</p>
                </div>
              </div>

              {/* Image Gallery - First 2 images on the right of video */}
              {event.images.slice(0, 2).map((image, imageIndex) => (
                <div 
                  key={imageIndex}
                  className="relative group cursor-pointer rounded-xl overflow-hidden border border-border hover:border-accent-primary/50 transition-all duration-300"
                  onClick={() => openLightbox(image, allImages.findIndex(img => img.url === image.url))}
                >
                  <div className="aspect-video relative">
                    <img 
                      src={image.url} 
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-3">
                    <p className="text-sm text-muted-foreground line-clamp-2">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Remaining Images - Second row */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {event.images.slice(2).map((image, imageIndex) => (
                <div 
                  key={imageIndex + 2}
                  className="relative group cursor-pointer rounded-xl overflow-hidden border border-border hover:border-accent-primary/50 transition-all duration-300"
                  onClick={() => openLightbox(image, allImages.findIndex(img => img.url === image.url))}
                >
                  <div className="aspect-video relative">
                    <img 
                      src={image.url} 
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-3">
                    <p className="text-sm text-muted-foreground line-clamp-2">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation Arrows for Images */}
          {selectedMedia.type === 'image' && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          {/* Media Content */}
          <div className="max-w-6xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === 'image' ? (
              <div className="text-center">
                <img 
                  src={allImages[currentImageIndex]?.url || selectedMedia.url} 
                  alt={allImages[currentImageIndex]?.caption || selectedMedia.caption}
                  className="max-w-full max-h-[80vh] object-contain mx-auto rounded-lg"
                />
                <div className="mt-4 text-white">
                  <p className="text-lg font-medium">{allImages[currentImageIndex]?.caption || selectedMedia.caption}</p>
                  <p className="text-sm text-white/70 mt-1">
                    {allImages[currentImageIndex]?.eventTitle} • {allImages[currentImageIndex]?.eventYear}
                  </p>
                  <p className="text-xs text-white/50 mt-2">
                    {currentImageIndex + 1} of {allImages.length}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-black rounded-lg overflow-hidden">
                <video 
                  controls
                  autoPlay
                  className="w-full max-h-[80vh] object-contain"
                  poster={selectedMedia.thumbnail}
                >
                  <source src={selectedMedia.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4 text-center">
                  <p className="text-lg font-medium text-white">{selectedMedia.caption}</p>
                  <p className="text-sm text-white/70 mt-1">Duration: {selectedMedia.duration}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
    </>
  );
};

export default PastEventGallery;
