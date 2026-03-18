import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = ["Home", "About", "Courses", "Gallery", "Blog", "Contact Us"];

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-primary-foreground pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <img src="/images/logo.png" alt="Tune In School of Music" className="h-16 mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              At Tune In School of Music, we are dedicated to nurturing your musical talents through expert instruction and personalized lessons.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Now</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">Avadi, Chennai, Tamil Nadu.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+917200636000" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  +91 7200636000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:tuneinmusicschool@gmail.com" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  tuneinmusicschool@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Tune In School of Music. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
