import MusicCornerDecor from "@/components/MusicCornerDecor";

const cards = [
  {
    number: "01",
    title: "Expert Faculty",
    description:
      "At Music Mendor Global, our highly experienced and certified instructors provide personalized coaching, ensuring that each student receives the guidance they need to excel in their musical journey.",
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#54456f] mb-12" data-aos="fade-up">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={card.number}
              className="gradient-outline-card rounded-2xl p-8 text-[#54456f] hover:-translate-y-2 transition-transform duration-300 group"
              data-aos="fade-down"
              data-aos-delay={index * 120}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="music-gradient text-4xl leading-none">♫</span>
                <span className="music-gradient text-4xl font-bold opacity-60">{card.number}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-[#6b5f7d] text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
