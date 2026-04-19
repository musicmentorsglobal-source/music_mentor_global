import { Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Contact Us", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-primary-foreground pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="brand-wordmark mb-4">
              <span className="brand-wordmark__title music-gradient text-[2rem] md:text-[2.25rem]">Music Mendor Global</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              At Music Mendor Global, we are dedicated to nurturing your musical talents through expert instruction and personalized lessons.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="gradient-icon-button flex h-10 w-10 items-center justify-center rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="gradient-icon-button flex h-10 w-10 items-center justify-center rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer-link text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Now</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="top-contact-icon flex-shrink-0">
                  <Phone />
                </span>
                <a href="tel:+918148865188" className="footer-link text-sm">
                  +91 8148865188
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="top-contact-icon flex-shrink-0">
                  <Mail />
                </span>
                <a href="mailto:musicmentorsglobal@gmail.com" className="footer-link text-sm">
                  musicmentorsglobal@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Music Mendor Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
