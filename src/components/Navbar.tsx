import { useState, useEffect } from "react";
import { Mail, Menu, Phone, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveHash(`#${visibleEntries[0].target.id}`);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5, 0.65],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="glass-header hidden border-b border-white/40 text-[#54456f] lg:block">
        <div className="container mx-auto flex items-center gap-8 px-4">
          <div className="flex items-center gap-3 py-3">
            <span className="top-contact-icon">
              <Phone />
            </span>
            <a href="tel:+918148865188" className="text-[15px] text-[#54456f] transition-colors hover:text-primary">
              +91 8148865188
            </a>
          </div>
          <div className="flex items-center gap-3 py-3">
            <span className="top-contact-icon">
              <Mail />
            </span>
            <a
              href="mailto:musicmentorsglobal@gmail.com"
              className="text-[15px] text-[#54456f] transition-colors hover:text-primary"
            >
              musicmentorsglobal@gmail.com
            </a>
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
            <div className="brand-wordmark">
              <span className="brand-wordmark__title music-gradient text-[2rem] md:text-[2.35rem]">Music Mentors Global</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`nav-link font-medium text-[15px] uppercase tracking-wide ${
                    activeHash === link.href ? "is-active" : ""
                  }`}
                  onClick={() => setActiveHash(link.href)}
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
              className="gradient-icon-button flex h-10 w-10 items-center justify-center rounded-full"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="gradient-icon-button flex h-10 w-10 items-center justify-center rounded-full"
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
                    className={`nav-link block py-2 font-medium text-[15px] uppercase tracking-wide ${
                      activeHash === link.href ? "is-active" : ""
                    }`}
                    onClick={() => {
                      setActiveHash(link.href);
                      setMobileOpen(false);
                    }}
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
                className="gradient-icon-button flex h-10 w-10 items-center justify-center rounded-full"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="gradient-icon-button flex h-10 w-10 items-center justify-center rounded-full"
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
