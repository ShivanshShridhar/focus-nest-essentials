import { Heart, Users, Lightbulb, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Wellness First",
      description: "Every product is designed with your physical and mental well-being in mind.",
    },
    {
      icon: Users,
      title: "Human-Centered",
      description: "We study how people work to create solutions that fit naturally into your routine.",
    },
    {
      icon: Lightbulb,
      title: "Thoughtful Design",
      description: "Simple, functional, beautiful—products that enhance rather than complicate.",
    },
    {
      icon: Target,
      title: "Focus & Flow",
      description: "Everything we make is optimized to help you achieve deep work and sustained focus.",
    },
  ];

  return (
    <section id="about" className="py-20 gradient-calm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Designed for the Way You Work
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Focus Nest, we believe your workspace should be a sanctuary that 
                supports your best work. Every product in our collection is carefully 
                selected and tested to ensure it not only looks beautiful but genuinely 
                improves your daily experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From ergonomic seating that supports your posture during long work 
                sessions to accessories that reduce eye strain and distraction, we're 
                here to help you create an environment where focus flows naturally.
              </p>
            </div>

            <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Our Promise</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every product comes with a 30-day satisfaction guarantee. If it doesn't 
                enhance your focus and comfort, we'll make it right.
              </p>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 space-y-4 hover:bg-background/90 transition-smooth"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;