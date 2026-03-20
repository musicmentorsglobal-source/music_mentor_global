import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="glass-header text-foreground py-2 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-6">
            <a href="tel:+917200636000" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" /> +91 7200636000
            </a>
            <a href="mailto:tuneinmusicschool@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5" /> tuneinmusicschool@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" /> Avadi, Chennai, Tamil Nadu.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span>Follow Us :</span>
            <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 glass-header ${
          isScrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <a href="#hero">
            <img src="/images/logo.png" alt="Tune In School of Music" className="h-14 md:h-16" />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-foreground font-medium text-[15px] uppercase tracking-wide hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button className="bg-primary text-primary-foreground rounded-full px-7 py-5 text-sm font-semibold uppercase tracking-wide hover:bg-primary/90">
              Register Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden glass-header px-4 pb-4">
            <ul className="flex flex-col gap-3 pt-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block text-foreground font-medium text-[15px] uppercase tracking-wide hover:text-primary transition-colors py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button className="w-full mt-4 bg-primary text-primary-foreground rounded-full py-5 text-sm font-semibold uppercase">
              Register Now
            </Button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
