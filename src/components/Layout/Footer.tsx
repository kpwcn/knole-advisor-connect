import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/ab060c40-f5d5-43c5-8320-c6d3fb36981f.png" 
                alt="Knole Advisory Logo" 
                className="h-10 w-10 rounded-full"
              />
              <div>
                <h3 className="text-xl font-heading font-bold">Knole Advisory</h3>
                <p className="text-sm text-primary-foreground/80">Student Investment Banking Society</p>
              </div>
            </div>
            
            {/* CMS-edit-start::footer-description */}
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Empowering students through finance education, professional development, 
              and deal exposure in the investment banking industry.
            </p>
            {/* CMS-edit-end */}

            {/* Newsletter Signup */}
            <div className="max-w-md">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              {!isSubscribed ? (
                <form onSubmit={handleNewsletterSubmit} id="newsletter-form" className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                  <Button type="submit" className="bg-primary-foreground text-primary transition-all duration-200 hover:scale-105">
                    Subscribe
                  </Button>
                </form>
              ) : (
                <div className="text-university-gold">
                  ✓ Thank you for subscribing to our newsletter!
                </div>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-foreground/80 transition-all duration-200 hover:scale-105">About Us</Link></li>
              <li><Link to="/team" className="text-primary-foreground/80 transition-all duration-200 hover:scale-105">Committee</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 transition-all duration-200 hover:scale-105">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              {/* CMS-edit-start::contact-info */}
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">info@knoleadvisory.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">University College London</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">+44 20 7679 2000</span>
              </div>
              {/* CMS-edit-end */}
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="text-primary-foreground/60 transition-all duration-200 hover:scale-105" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-primary-foreground/60 transition-all duration-200 hover:scale-105" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-primary-foreground/80 text-sm">
            {/* CMS-edit-start::copyright */}
            © 2024 Knole Advisory. All rights reserved.
            {/* CMS-edit-end */}
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-primary-foreground/80 text-sm transition-all duration-200 hover:scale-105">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/80 text-sm transition-all duration-200 hover:scale-105">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
