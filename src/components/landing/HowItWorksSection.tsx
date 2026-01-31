import { MessageSquare, Home, Calendar } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Chat with our AI assistant",
    description: "Start a conversation anytime. Our AI understands your preferences and requirements instantly.",
  },
  {
    icon: Home,
    step: "02",
    title: "Get qualified property matches",
    description: "Receive personalized listings that match your criteria, budget, and lifestyle needs.",
  },
  {
    icon: Calendar,
    step: "03",
    title: "Schedule your viewing",
    description: "Book property tours or calls directly with your agent at times that work for you.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-warm-white">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Your Journey to Home
            <span className="text-gradient block">Made Simple</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Three simple steps to finding your perfect property with our AI-powered assistance.
          </p>
        </div>
        
        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-card card-hover text-center"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-8 text-6xl font-serif font-bold text-muted/60">
                {item.step}
              </div>
              
              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              
              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 w-12 lg:w-16 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
