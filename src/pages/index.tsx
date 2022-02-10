import type { NextPage } from "next";
import Navbar from "@/components/navbar";
import Side from "@/components/side";
import AboutSection from "@/components/sections/about";
import HeroSection from "@/components/sections/hero";
import Footer from "@/components/footer";
import ContactSection from "@/components/sections/contact";
import ExperienceSection from "@/components/sections/experience";
import WorkSection from "@/components/sections/work";

interface IHomeProps {
  gitStats: {
    stars: number;
    forks: number;
    error?: boolean;
  };
}

const Home: NextPage<IHomeProps> = ({ gitStats }) => {
  return (
    <div>
      <Navbar />
      <Side />

      <div className="mx-auto px-[6%] md:px-[150px]">
        <main className="h-full">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <WorkSection />
          <ContactSection />
        </main>
        <Footer gitStats={gitStats} />
      </div>
    </div>
  );
};

Home.getInitialProps = async ({ req }: any) => {
  const gitStats = await fetch(
    "https://api.github.com/repos/victorjambo/profile-v2"
  )
    .then((res) => res.json())
    .then((res) => ({ stars: res.stargazers_count, forks: res.forks_count }))
    .catch(() => ({ stars: 0, forks: 0, error: true }));
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { gitStats, userAgent };
};

export default Home;
