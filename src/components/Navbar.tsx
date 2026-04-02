import { useState, useEffect } from "react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
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
      <div className="hidden border-b border-[#eadfd6] bg-[radial-gradient(540px_circle_at_15%_30%,rgba(240,90,40,0.12),transparent_58%),radial-gradient(620px_circle_at_85%_20%,rgba(240,90,40,0.12),transparent_58%),linear-gradient(180deg,rgba(255,249,245,0.94),rgba(248,241,235,0.92))] text-[#54456f] backdrop-blur-xl lg:block">
        <div className="container mx-auto flex items-center gap-8 px-4">
          <div className="flex items-center gap-3 py-3">
            <Phone className="h-4 w-4 text-primary" />
            <a href="tel:+917200636000" className="text-[15px] text-[#54456f] transition-colors hover:text-primary">
              +91 7200636000
            </a>
          </div>
          <div className="flex items-center gap-3 py-3">
            <Mail className="h-4 w-4 text-primary" />
            <a
              href="mailto:tuneinmusicschool@gmail.com"
              className="text-[15px] text-[#54456f] transition-colors hover:text-primary"
            >
              tuneinmusicschool@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 py-3">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-[15px] text-[#54456f]">Avadi, Chennai, Tamil Nadu.</span>
          </div>
        </div>
      </div>

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

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.9 2H22l-6.77 7.74L23 22h-6.1l-4.78-6.25L6.7 22H3.6l7.25-8.29L1 2h6.25l4.32 5.7L18.9 2zm-1.07 18h1.69L6.33 3.9H4.5L17.83 20z"/></svg>
            </a>
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
            <div className="flex items-center gap-3 mt-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.9 2H22l-6.77 7.74L23 22h-6.1l-4.78-6.25L6.7 22H3.6l7.25-8.29L1 2h6.25l4.32 5.7L18.9 2zm-1.07 18h1.69L6.33 3.9H4.5L17.83 20z"/></svg>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
