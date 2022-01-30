import type { NextPage } from "next";
import Head from "next/head";
import { useTheme } from "next-themes";
import Navbar from "@/components/navbar";
import Side from "@/components/side";
import AboutSection from "@/components/about";
import HeroSection from "@/components/hero";

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
            <div className="section-header section-header-size flex items-end mt-[10px] mb-10 font-semibold leading-[1.1]">
              <span className="section-header-size-2 mr-[10px] font-normal relative bottom-1 text-green">
                02.
              </span>
              <span className="font-sans">Where I&apos;ve Worked</span>
            </div>
          </section>
          <section id="work">Work</section>
          <section id="contact">Contact</section>
        </main>
      </div>
    </div>
  );
};

export default Home;
