import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Content */}
      <div className="relative z-10 container-narrow section-padding text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90 tracking-wide">
              AI-Powered Real Estate
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
            Find Your Dream Home
            <span className="block text-gradient mt-2">Faster</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Instant responses. Qualified buyers. 24/7 assistance.
            <br className="hidden md:block" />
            Your perfect property is just a conversation away.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="min-w-[200px]">
              <MessageCircle className="w-5 h-5" />
              Chat Now
            </Button>
            <Button variant="heroOutline" size="xl" className="min-w-[200px]">
              View Listings
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-primary-foreground/60 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary-foreground">500+</span>
              <span>Homes Sold</span>
            </div>
            <div className="w-px h-4 bg-primary-foreground/30" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary-foreground">98%</span>
              <span>Client Satisfaction</span>
            </div>
            <div className="w-px h-4 bg-primary-foreground/30 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary-foreground">24/7</span>
              <span>AI Assistance</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-primary-foreground/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
