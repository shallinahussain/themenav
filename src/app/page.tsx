import FeaturedCourses from "@/component/FeaturedCourses";
import Footer from "@/component/Footer";
import HeroSection from "@/component/HeroSection";
import Instructors from "@/component/instructors";
import TestiMonialCard from "@/component/TestimonialCards";
import UpcomingWebinars from "@/component/UpcomingWebinars";
import WhyChooseUs from "@/component/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <FeaturedCourses />
    <WhyChooseUs />
    <TestiMonialCard/>
    <UpcomingWebinars/>
    <Instructors />
    <Footer />
    </main>
  );
}

 