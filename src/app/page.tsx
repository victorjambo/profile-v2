import React from "react";
import Navbar from "@/components/navbar";
import Side from "@/components/side";
import AboutSection from "@/components/sections/about";
import HeroSection from "@/components/sections/hero";
import Footer from "@/components/footer";
import ContactSection from "@/components/sections/contact";
import ExperienceSection from "@/components/sections/experience";
import WorkSection from "@/components/sections/work";

const Home = () => {
  return (
    <div>
      <Navbar />
      <React.Suspense>
        <Side />
      </React.Suspense>

      <div className="mx-auto px-[6%] md:px-[150px]">
        <main className="h-full">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <WorkSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
