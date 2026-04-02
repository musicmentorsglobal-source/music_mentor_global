import Navbar from "@/components/Navbar";
import ReferenceBeautyHero from "@/components/ReferenceBeautyHero";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoursesSection from "@/components/CoursesSection";
import ContactDetailsSection from "@/components/ContactDetailsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
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
      {/* <ExamsCTA /> */}
      <ContactDetailsSection />
      <Footer />
    </div>
  );
};

export default Index;
