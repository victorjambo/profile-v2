import type { NextPage } from "next";
import Head from "next/head";
import { useTheme } from "next-themes";
import Navbar from "@/components/navbar";
import Side from "@/components/side";
import AboutSection from "@/components/sections/about";
import HeroSection from "@/components/sections/hero";
import { SectionHeader } from "@/components/sections";
import Footer from "@/components/footer";
import ContactSection from "@/components/sections/contact";
import ExperienceSection from "@/components/sections/experience";
import WorkSection from "@/components/sections/work";

const Home: NextPage = () => {
  const { theme } = useTheme();

  return (
    <div>
      <Head>
        <title>Victor Mutai</title>
        <meta name="description" content="Web3 Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Side />

      <div className={`${theme}  mx-auto px-[150px]`}>
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
