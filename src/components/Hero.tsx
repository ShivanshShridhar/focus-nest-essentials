import { ArrowRight, Focus, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center gradient-focus">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Create Your Perfect
                <span className="block text-primary">Focus Space</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Thoughtfully designed ergonomic products to enhance your productivity, 
                reduce strain, and help you do your best work in comfort and clarity.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Focus className="w-4 h-4 text-primary" />
                <span>Enhanced Focus</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-primary" />
                <span>Increased Productivity</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>Health & Comfort</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="transition-smooth">
                Shop Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="transition-smooth">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <img
                src={heroImage}
                alt="Clean, organized workspace with ergonomic furniture"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-calm-green rounded-2xl p-4 shadow-soft">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-xs text-muted-foreground">Satisfaction</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-focus-blue rounded-2xl p-4 shadow-soft">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">30+</div>
                <div className="text-xs text-muted-foreground">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;