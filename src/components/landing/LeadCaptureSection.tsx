import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    text: "AI-powered matching",
  },
  {
    icon: Clock,
    text: "Instant responses 24/7",
  },
  {
    icon: Shield,
    text: "No obligation",
  },
];

const LeadCaptureSection = () => {
  return (
    <section className="section-padding bg-warm-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-8">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Start Your Search Today
            </span>
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Get Your Perfect Home
            <span className="text-gradient block mt-2">Now</span>
          </h2>
          
          {/* Subtext */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Answer a few questions and our AI assistant will find your ideal property. 
            No forms, no waiting—just intelligent conversation.
          </p>
          
          {/* CTA Button */}
          <Button variant="premium" size="xl" className="mb-12">
            <MessageCircle className="w-5 h-5" />
            Start Chatting Now
          </Button>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <feature.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
