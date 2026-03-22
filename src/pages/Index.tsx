import Navbar from "@/components/Navbar";
import ReferenceBeautyHero from "@/components/ReferenceBeautyHero";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoursesSection from "@/components/CoursesSection";
import ContactDetailsSection from "@/components/ContactDetailsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ReferenceBeautyHero />
      <AboutSection />
      <WhyChooseUs />
      <CoursesSection />
      <TestimonialsSection />
      <GallerySection />
      {/* <ExamsCTA /> */}
      <BlogSection />
      <ContactDetailsSection />
      <Footer />
    </div>
  );
};

export default Index;
