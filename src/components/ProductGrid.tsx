import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import ergonomicChair from "@/assets/ergonomic-chair.jpg";
import ergonomicChairFront from "@/assets/ergonomic-chair-front.jpg";
import ergonomicChairSide from "@/assets/ergonomic-chair-side.jpg";
import ergonomicChairWhite from "@/assets/ergonomic-chair-white.jpg";
import ergonomicPeripherals from "@/assets/ergonomic-peripherals.jpg";
import peripheralsTopView from "@/assets/peripherals-top-view.jpg";
import peripheralsDetail from "@/assets/peripherals-detail.jpg";
import peripheralsLifestyle from "@/assets/peripherals-lifestyle.jpg";
import blueLightGlasses from "@/assets/blue-light-glasses.jpg";
import standingDesk from "@/assets/standing-desk.jpg";
import monitorStand from "@/assets/monitor-stand.jpg";
import wirelessCharger from "@/assets/wireless-charger.jpg";
import laptopStand from "@/assets/laptop-stand.jpg";
import wristRest from "@/assets/wrist-rest.jpg";
import deskOrganizer from "@/assets/desk-organizer.jpg";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "ErgoLux Pro Chair",
      category: "Seating",
      price: "$449",
      rating: 4.9,
      reviews: 127,
      image: ergonomicChair,
      description: "Premium ergonomic chair with lumbar support and breathable mesh back",
      benefits: ["Reduces back strain", "Improves posture", "All-day comfort"],
    },
    {
      id: 2,
      name: "Focus Flow Keyboard & Mouse",
      category: "Peripherals",
      price: "$129",
      rating: 4.8,
      reviews: 89,
      image: ergonomicPeripherals,
      description: "Wireless ergonomic keyboard and mouse combo for comfortable typing",
      benefits: ["Reduces wrist strain", "Wireless freedom", "Quiet operation"],
    },
    {
      id: 3,
      name: "ClearVision Blue Light Glasses",
      category: "Accessories",
      price: "$79",
      rating: 4.7,
      reviews: 203,
      image: blueLightGlasses,
      description: "Stylish blue light blocking glasses to reduce eye strain",
      benefits: ["Reduces eye fatigue", "Better sleep", "Modern design"],
    },
    {
      id: 4,
      name: "ElevateDesk Pro Standing Desk",
      category: "Furniture",
      price: "$599",
      rating: 4.8,
      reviews: 156,
      image: standingDesk,
      description: "Height-adjustable standing desk with spacious surface and memory presets",
      benefits: ["Promotes better posture", "Reduces sitting fatigue", "Improves circulation"],
    },
    {
      id: 5,
      name: "VisionRise Monitor Stand",
      category: "Accessories",
      price: "$89",
      rating: 4.6,
      reviews: 134,
      image: monitorStand,
      description: "Bamboo monitor stand with storage compartments for desk organization",
      benefits: ["Optimal screen height", "Reduces neck strain", "Extra storage space"],
    },
    {
      id: 6,
      name: "PowerFlow Wireless Charger",
      category: "Tech",
      price: "$45",
      rating: 4.5,
      reviews: 298,
      image: wirelessCharger,
      description: "Fast wireless charging stand with phone positioning for video calls",
      benefits: ["Cable-free charging", "Video call ready", "Sleek design"],
    },
    {
      id: 7,
      name: "LiftBook Laptop Stand",
      category: "Accessories",
      price: "$119",
      rating: 4.9,
      reviews: 187,
      image: laptopStand,
      description: "Adjustable aluminum laptop stand for ergonomic viewing and cooling",
      benefits: ["Better screen angle", "Improved airflow", "Portable design"],
    },
    {
      id: 8,
      name: "ComfortType Wrist Rest",
      category: "Accessories",
      price: "$29",
      rating: 4.4,
      reviews: 421,
      image: wristRest,
      description: "Memory foam wrist rest with soft fabric cover for typing comfort",
      benefits: ["Reduces wrist strain", "Memory foam comfort", "Non-slip base"],
    },
    {
      id: 9,
      name: "ZenSpace Desk Organizer",
      category: "Organization",
      price: "$59",
      rating: 4.7,
      reviews: 163,
      image: deskOrganizer,
      description: "Multi-compartment wooden desk organizer for a clutter-free workspace",
      benefits: ["Keeps desk tidy", "Natural wood finish", "Multiple compartments"],
    },
    {
      id: 10,
      name: "ErgoLux Pro Chair - Classic Black",
      category: "Seating",
      price: "$449",
      rating: 4.9,
      reviews: 127,
      image: ergonomicChairFront,
      description: "Premium ergonomic chair front view showcasing modern design and comfort",
      benefits: ["Reduces back strain", "Improves posture", "All-day comfort"],
    },
    {
      id: 11,
      name: "ErgoLux Pro Chair - Side Profile",
      category: "Seating",
      price: "$449",
      rating: 4.9,
      reviews: 127,
      image: ergonomicChairSide,
      description: "Side view highlighting the curved lumbar support and ergonomic features",
      benefits: ["Optimal spine alignment", "Adjustable components", "Professional design"],
    },
    {
      id: 12,
      name: "ErgoLux Pro Chair - White Edition",
      category: "Seating",
      price: "$469",
      rating: 4.8,
      reviews: 98,
      image: ergonomicChairWhite,
      description: "Clean white variant perfect for modern minimalist workspaces",
      benefits: ["Modern aesthetic", "Easy to clean", "Timeless design"],
    },
    {
      id: 13,
      name: "Focus Flow - Top View",
      category: "Peripherals",
      price: "$129",
      rating: 4.8,
      reviews: 89,
      image: peripheralsTopView,
      description: "Top-down view showcasing the ergonomic keyboard layout and wireless mouse",
      benefits: ["Split keyboard design", "Wireless convenience", "Ergonomic curves"],
    },
    {
      id: 14,
      name: "Focus Flow - Detail Shot",
      category: "Peripherals",
      price: "$129",
      rating: 4.8,
      reviews: 89,
      image: peripheralsDetail,
      description: "Close-up detail of premium keys and precision mouse design",
      benefits: ["Tactile feedback", "Precision tracking", "Premium materials"],
    },
    {
      id: 15,
      name: "Focus Flow - In Action",
      category: "Peripherals",
      price: "$129",
      rating: 4.8,
      reviews: 89,
      image: peripheralsLifestyle,
      description: "Lifestyle shot showing natural hand positioning and comfortable use",
      benefits: ["Natural wrist position", "Comfortable typing", "Reduced strain"],
    },
  ];

  return (
    <section id="shop" className="py-20 bg-warm-neutral/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Carefully curated ergonomic essentials designed to transform your workspace 
            into a sanctuary of focus and productivity.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-border/50 hover:border-primary/20 transition-smooth shadow-soft hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-muted-foreground/30'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <div className="flex items-center justify-between w-full">
                  <div className="text-2xl font-bold text-foreground">
                    {product.price}
                  </div>
                  <Button className="transition-smooth">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Products */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="transition-smooth">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;