import MusicCornerDecor from "@/components/MusicCornerDecor";

const cards = [
  {
    number: "01",
    title: "Expert Faculty",
    description:
      "At Tune In School Of Music, our highly experienced and certified instructors provide personalized coaching, ensuring that each student receives the guidance they need to excel in their musical journey.",
  },
  {
    number: "02",
    title: "International Certifications",
    description:
      "We prepare students for globally recognized exams conducted by ABRSM and Trinity College London, offering certification from Initial to Grade 8. This recognition opens doors to global music opportunities.",
  },
  {
    number: "03",
    title: "Performance Opportunities",
    description:
      "Our students gain real-world experience through concerts, workshops, and competitions. These events help build their stage confidence while receiving valuable feedback from experts in the music industry.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-16 md:py-20 bg-transparent overflow-hidden">
      <MusicCornerDecor />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
                                                                            {cards.map((card) => (
            <div
              key={card.number}
              className="bg-primary rounded-2xl p-8 text-primary-foreground hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src="/images/music-icon.svg" alt="" className="w-10 h-10 brightness-0 invert" />
                <span className="text-4xl font-bold opacity-30">{card.number}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
