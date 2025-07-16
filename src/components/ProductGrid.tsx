import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import ergonomicChair from "@/assets/ergonomic-chair.jpg";
import ergonomicPeripherals from "@/assets/ergonomic-peripherals.jpg";
import blueLightGlasses from "@/assets/blue-light-glasses.jpg";

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