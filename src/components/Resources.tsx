import { BookOpen, Clock, Eye, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const articles = [
    {
      icon: User,
      title: "The Science of Ergonomic Seating",
      excerpt: "How proper chair support can reduce back pain by up to 40% and improve focus throughout the day.",
      readTime: "5 min read",
      category: "Ergonomics",
    },
    {
      icon: Eye,
      title: "Protecting Your Eyes in the Digital Age",
      excerpt: "Simple strategies to reduce eye strain, including the 20-20-20 rule and optimal screen positioning.",
      readTime: "4 min read",
      category: "Health",
    },
    {
      icon: Clock,
      title: "Creating Your Ideal Work Routine",
      excerpt: "Time-tested techniques for maintaining focus and energy throughout your workday.",
      readTime: "7 min read",
      category: "Productivity",
    },
    {
      icon: BookOpen,
      title: "Workspace Setup Guide",
      excerpt: "A step-by-step guide to arranging your desk for maximum comfort and efficiency.",
      readTime: "6 min read",
      category: "Setup",
    },
  ];

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Focus & Wellness Resources
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Expert insights and practical tips to help you create a healthier, 
            more productive workspace and work routine.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card key={index} className="group hover:shadow-soft transition-smooth border-border/50 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <article.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-primary font-medium px-2 py-1 bg-primary/10 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {article.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-gentle">
                      {article.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 h-auto font-medium">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-focus-blue/30 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Quick Focus Tips
            </h3>
            <p className="text-muted-foreground">
              Simple habits that make a big difference in your daily productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="font-semibold text-foreground">Lighting Matters</h4>
              <p className="text-sm text-muted-foreground">
                Position your screen perpendicular to windows to reduce glare and eye strain.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="font-semibold text-foreground">Add Greenery</h4>
              <p className="text-sm text-muted-foreground">
                Plants improve air quality and can increase productivity by up to 15%.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl">⏰</span>
              </div>
              <h4 className="font-semibold text-foreground">Take Breaks</h4>
              <p className="text-sm text-muted-foreground">
                Every 50 minutes, take a 10-minute break to reset your focus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;