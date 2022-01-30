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
          <section id="experience" className="max-w-[700px] mx-auto py-[100px]">
            <SectionHeader idx="02." title="Where I've Worked" />
          </section>
          <section id="work" className="max-w-[1000px] mx-auto py-[100px]">
            <SectionHeader idx="03." title="Some Things I've Built" />
          </section>
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
