import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who can participate in Codathon 2026?",
      answer: "Any student from engineering colleges, universities, or programming enthusiasts can participate. This is a national-level competition open to all skill levels from beginners to advanced programmers."
    },
    {
      question: "What programming languages are allowed?",
      answer: "You can code in C, C++, Python, or Java. Choose the language you're most comfortable with for all three rounds of the competition."
    },
    {
      question: "Is there any registration fee?",
      answer: "Yes, 50/- Rs Fee to participate. Just register on Unstop and showcase your coding skills!"
    },
    {
      question: "What are the competition dates and timings?",
      answer: "Round 1 (Online MCQ): 8 Sept 2025, 11:00 AM - 7:00 PM IST (8 hours). Round 2 (Offline): 15 Sept 2025, 10:00 AM - 1:00 PM IST at ADCET campus. Round 3 (Final): 15 Sept 2025, 2:00 PM - 5:00 PM IST at ADCET campus, Ashta."
    },
    {
      question: "How many participants will qualify for each round?",
      answer: "Round 1: Top 200+ participants qualify for Round 2. Round 2: Top 50 participants qualify for the final Round 3. Winners receive internship opportunities from IT Industries."
    },
    {
      question: "Do I need to come to the college for Round 2 & 3?",
      answer: "Yes, Round 2 and Round 3 are offline rounds conducted on the same day (15 Sept 2025) at ADCET campus in Ashta, Sangli, Maharashtra. Accommodation arrangements can be discussed upon qualification."
    },
    {
      question: "What topics should I prepare for?",
      answer: "Round 1: Basic programming concepts in C, C++, Python, Java. Round 2: Data Structures and Algorithms, problem-solving. Round 3: Industry-based problems evaluated by IT Industries."
    },
    {
      question: "What are the prizes and benefits?",
      answer: "Winners receive ₹10,000 cash prize pool, internship opportunities at IT Tech, certificates, networking opportunities with industry professionals, and recognition as national-level programming champions."
    },
    {
      question: "How will I know if I qualify for the next round?",
      answer: "Results will be announced on our official channels and Unstop platform. Qualified participants will receive email notifications with further instructions."
    },
    {
      question: "Can I participate as a team?",
      answer: "Codathon 2026 is an individual competition. Each participant competes independently across all three rounds."
    }
  ];

  return (
    <section id="faq" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent-primary/10 border border-accent-primary/20 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-accent-primary" />
            <span className="text-sm font-medium text-accent-primary">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Got Questions?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
              We've Got Answers
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Codathon 2026. Can't find what you're looking for? 
            <a 
              href="tel:+917768807185" 
              className="text-accent-primary hover:text-accent-primary/80 ml-1 transition-colors"
            >
              Contact us
            </a>
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className={`border transition-all duration-300 hover:shadow-lg cursor-pointer ${
                  openFAQ === index 
                    ? 'border-accent-primary/50 bg-accent-primary/5 shadow-md' 
                    : 'border-border hover:border-accent-primary/30'
                }`}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center justify-between text-left">
                    <span className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                    <div className={`transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-180' : 'rotate-0'
                    }`}>
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </CardTitle>
                </CardHeader>
                
                <div className={`transition-all duration-300 overflow-hidden ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <CardContent className="pt-0">
                    <div className="border-t border-border/50 pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl blur-lg opacity-30" />
            <div className="relative bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-4">
                Our team is here to help you with any queries about Codathon 2026
              </p>
              <a 
                href="tel:+917768807185"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary/90 hover:to-accent-secondary/90 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <HelpCircle className="w-4 h-4" />
                Contact Support: +91 77688 07185
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
