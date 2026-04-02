import { Button } from "@/components/ui/button";
import MusicCornerDecor from "@/components/MusicCornerDecor";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-8 md:py-12 bg-[#f3f1ee] overflow-hidden">
      <MusicCornerDecor />
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Left - Images */}
          <div className="relative -mt-2 md:-mt-4" data-aos="fade-right">
            <div className="relative mx-auto lg:mx-0 max-w-[420px] md:max-w-[500px]">
              <img
                src="/img/about_section_img.png"
                alt="Music students performing"
                className="w-[92%] md:w-[90%] h-auto object-contain mx-auto"
              />
              <div
                className="about-experience-card absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2 rounded-2xl border border-white/70 backdrop-blur-lg shadow-[0_12px_26px_rgba(40,24,74,0.16)] px-4 py-3 md:px-5 md:py-4"
                data-aos="fade-up-right"
                data-aos-delay="120"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.72) 0%, rgba(227,220,226,0.72) 50%, rgba(255,255,255,0.72) 100%)",
                }}
              >
                <span className="block text-xl md:text-2xl font-bold text-[#54456f] leading-none">50+</span>
                <span className="block text-[10px] md:text-xs font-semibold text-[#6b5f7d] mt-1.5 uppercase tracking-wider">
                  Students
                </span>
              </div>
              <div
                className="about-experience-card absolute -right-6 md:-right-8 top-1/2 -translate-y-1/2 rounded-2xl border border-white/70 backdrop-blur-lg shadow-[0_12px_26px_rgba(40,24,74,0.16)] px-4 py-3 md:px-5 md:py-4"
                data-aos="fade-down-right"
                data-aos-delay="180"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.72) 0%, rgba(227,220,226,0.72) 50%, rgba(255,255,255,0.72) 100%)",
                }}
              >
                <span className="block text-xl md:text-2xl font-bold text-[#54456f] leading-none">7+</span>
                <span className="block text-[10px] md:text-xs font-semibold text-[#6b5f7d] mt-1.5 uppercase tracking-wider">
                  Courses
                </span>
              </div>
              <div
                className="about-experience-card absolute left-[40%] md:left-[42%] top-3 md:top-4 rounded-2xl border border-white/70 backdrop-blur-lg shadow-[0_12px_26px_rgba(40,24,74,0.16)] px-4 py-3 md:px-5 md:py-4"
                data-aos="fade-up"
                data-aos-delay="240"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.72) 0%, rgba(227,220,226,0.72) 50%, rgba(255,255,255,0.72) 100%)",
                }}
              >
                <span className="block text-xl md:text-2xl font-bold text-[#54456f] leading-none">50+</span>
                <span className="block text-[10px] md:text-xs font-semibold text-[#6b5f7d] mt-1.5 uppercase tracking-wider">
                  Events
                </span>
              </div>
              <div
                className="about-experience-card absolute right-3 md:right-5 bottom-4 md:bottom-6 rounded-2xl border border-white/70 backdrop-blur-lg shadow-[0_12px_26px_rgba(40,24,74,0.16)] px-5 py-4 md:px-6 md:py-5"
                data-aos="fade-up-left"
                data-aos-delay="300"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.72) 0%, rgba(227,220,226,0.72) 50%, rgba(255,255,255,0.72) 100%)",
                }}
              >
                <span className="block text-2xl md:text-3xl font-bold text-[#54456f] leading-none">15+</span>
                <span className="block text-xs md:text-sm font-semibold text-[#6b5f7d] mt-2 uppercase tracking-wider">
                  Experience
                </span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div data-aos="fade-left" data-aos-delay="140">
            <span className="font-script text-primary text-2xl md:text-3xl" data-aos="fade-up">
              About Music Mentor Global
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#54456f] leading-tight mt-3 mb-6" data-aos="fade-left" data-aos-delay="120">
              Welcome to Music Mentor Global
            </h2>
            <p className="text-[#6b5f7d] text-base md:text-lg mb-4 leading-relaxed" data-aos="fade-left" data-aos-delay="180">
              <strong className="text-[#54456f]">At Music Mentor Global</strong>, we teach music online, starting with guitar and piano. Unlike traditional platforms that rush students into exam-based learning, such as Trinity grades, we first help them understand why they are learning and what they are learning.
            </p>
            <p className="text-[#6b5f7d] text-base md:text-lg mb-8 leading-relaxed" data-aos="fade-left" data-aos-delay="240">
              Our structured, personalized syllabus builds a strong foundation, clarity, and confidence in every student. This approach not only improves learning outcomes but also increases long-term engagement and retention.
            </p>
            <Button className="bg-primary text-primary-foreground rounded-full px-8 py-6 text-base font-semibold uppercase tracking-wider hover:bg-primary/90" data-aos="fade-up" data-aos-delay="300">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
