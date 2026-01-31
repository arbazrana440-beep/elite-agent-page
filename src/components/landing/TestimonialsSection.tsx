import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "First-Time Buyer",
    image: "SM",
    quote: "The AI assistant understood exactly what I was looking for. Within a week, I found my dream home. The entire process was seamless and stress-free.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Property Investor",
    image: "DC",
    quote: "I've worked with many agents, but this experience was different. The 24/7 availability and quick responses made all the difference in a competitive market.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Home Seller",
    image: "ER",
    quote: "Sold my property above asking price in just 12 days. The AI pre-qualified buyers saved so much time. Highly recommend to anyone selling their home.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-primary-foreground/60 uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Real stories from real clients who found their perfect homes with our help.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-gold mb-6" />
              
              {/* Quote */}
              <p className="text-primary-foreground/90 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-primary-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-primary-foreground/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
