import { Button } from "@/components/ui/button";

const ExamsCTA = () => {
  return (
    <section className="section-corners py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl px-8 md:px-16 py-12 md:py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Exams & Certifications
          </h2>
          <p className="text-primary-foreground/85 max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed">
            Prepare for ABRSM and Trinity College London music exams from Initial to Grade 8. Our structured curriculum ensures that students excel in both performance and theory, gaining international recognition and enhancing their musical careers.
          </p>
          <a href="tel:+917200636000">
            <Button className="bg-primary-foreground text-primary rounded-full px-8 py-6 text-base font-semibold uppercase tracking-wider hover:bg-primary-foreground/90">
              Contact Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExamsCTA;
