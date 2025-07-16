import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">FN</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Focus Nest</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Creating ergonomic workspaces that enhance focus, productivity, and well-being.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-gentle">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-gentle">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-gentle">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-gentle">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-gentle">Ergonomic Chairs</a></li>
              <li><a href="#" className="hover:text-primary transition-gentle">Standing Desks</a></li>
              <li><a href="#" className="hover:text-primary transition-gentle">Keyboards & Mice</a></li>
              <li><a href="#" className="hover:text-primary transition-gentle">Blue Light Glasses</a></li>
              <li><a href="#" className="hover:text-primary transition-gentle">Accessories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-gentle">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-gentle">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary transition-gentle">Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-gentle">Warranty</a></li>
              <li><a href="#" className="hover:text-primary transition-gentle">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-gentle">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-gentle">Our Mission</a></li>
              <li><a href="#" className="hover:text-primary transition-gentle">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-gentle">Press</a></li>
              <li><a href="#" className="hover:text-primary transition-gentle">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Focus Nest. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-gentle">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-gentle">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-gentle">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;