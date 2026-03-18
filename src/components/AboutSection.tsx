import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <img
                src="/images/about-1.png"
                alt="Music students performing"
                className="rounded-2xl w-full shadow-lg"
              />
              <img
                src="/images/about-2.png"
                alt="Music class in session"
                className="absolute -bottom-8 -right-8 w-48 md:w-56 rounded-2xl shadow-xl border-4 border-background hidden md:block"
              />
              {/* Play Button */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Play className="w-6 h-6 ml-1" />
              </button>
              {/* Experience Badge */}
              <div className="absolute -left-4 bottom-8 bg-primary text-primary-foreground rounded-xl px-5 py-4 shadow-lg">
                <span className="block text-3xl font-bold">17+</span>
                <span className="text-sm font-medium">Years of Experience</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="font-script text-primary text-2xl">About Tune In</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Welcome to Tune In School of Music
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              <strong className="text-foreground">At Tune In School of Music</strong>, we are dedicated to nurturing your musical talents through expert instruction and personalized lessons. Whether you're a beginner or an advanced musician, our experienced instructors provide a supportive environment to help you achieve your musical goals. Join us and embark on a journey of creativity, skill, and passion for music!
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you're a beginner or refining your skills, our expert instructors provide the guidance you need to succeed. At Tune In School of Music, we turn music into a lifelong passion. Start your journey today.
            </p>
            <Button className="bg-primary text-primary-foreground rounded-full px-8 py-6 text-base font-semibold uppercase tracking-wider hover:bg-primary/90">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
