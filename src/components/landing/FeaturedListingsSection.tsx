import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";

const properties = [
  {
    image: property1,
    title: "Oceanfront Paradise Villa",
    location: "Malibu, California",
    price: "$4,850,000",
    beds: 5,
    baths: 6,
    sqft: "6,200",
    featured: true,
  },
  {
    image: property2,
    title: "Historic Georgetown Townhouse",
    location: "Washington, D.C.",
    price: "$2,195,000",
    beds: 4,
    baths: 4,
    sqft: "3,800",
    featured: false,
  },
  {
    image: property3,
    title: "Skyline Penthouse Suite",
    location: "Manhattan, New York",
    price: "$8,500,000",
    beds: 3,
    baths: 3,
    sqft: "4,500",
    featured: false,
  },
  {
    image: property4,
    title: "Mediterranean Estate",
    location: "Scottsdale, Arizona",
    price: "$1,875,000",
    beds: 4,
    baths: 5,
    sqft: "5,100",
    featured: false,
  },
];

const FeaturedListingsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-sm font-semibold tracking-widest text-accent uppercase mb-4 block">
              Featured Properties
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Exceptional Homes,
              <span className="text-gradient block">Exceptional Living</span>
            </h2>
          </div>
          <Button variant="premiumOutline" size="lg" className="self-start md:self-auto">
            View All Listings
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-card card-hover cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {property.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold text-primary text-xs font-semibold">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-5">
                {/* Price */}
                <div className="text-xl font-serif font-bold text-foreground mb-2">
                  {property.price}
                </div>
                
                {/* Title */}
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {property.title}
                </h3>
                
                {/* Location */}
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  {property.location}
                </div>
                
                {/* Features */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    {property.beds}
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    {property.baths}
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    {property.sqft} ft²
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

export default FeaturedListingsSection;
