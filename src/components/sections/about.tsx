import { SectionHeader } from "@/components/sections";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="max-w-[900px] mx-auto">
      <SectionHeader idx="01." title="About me" />
      <div className="grid gap-[50px] grid-inner text-slate font-sans">
        <div className="space-y-3">
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <p>
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-1 font-mono">
            <li className="tech relative pl-4">JavaScript</li>
            <li className="tech relative pl-4">ReactJs</li>
            <li className="tech relative pl-4">Node.js</li>
            <li className="tech relative pl-4">Typescript</li>
            <li className="tech relative pl-4">Solidity</li>
            <li className="tech relative pl-4">NextJs</li>
            <li className="tech relative pl-4">Python</li>
          </ul>
        </div>
        <div>
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
