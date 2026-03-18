import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl px-8 md:px-16 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground text-center md:text-left">
            Have questions?{" "}
            <span className="block md:inline font-normal text-lg md:text-xl text-primary-foreground/80">
              we're here to help you start your musical journey!
            </span>
          </h3>
          <a href="tel:+917200636000">
            <Button className="bg-primary-foreground text-primary rounded-full px-8 py-6 text-base font-semibold uppercase tracking-wider hover:bg-primary-foreground/90 whitespace-nowrap">
              Contact Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
