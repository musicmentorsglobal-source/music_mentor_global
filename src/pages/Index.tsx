import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoursesSection from "@/components/CoursesSection";
import StatsCounter from "@/components/StatsCounter";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ExamsCTA from "@/components/ExamsCTA";
import BlogSection from "@/components/BlogSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <CoursesSection />
      <StatsCounter />
      <TestimonialsSection />
      <GallerySection />
      <ExamsCTA />
      <BlogSection />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
