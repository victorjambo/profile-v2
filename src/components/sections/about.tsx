import { SectionHeader } from "@/components/sections";
import { aboutMe, technologies } from "@/utils/data";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="max-w-[900px] mx-auto">
      <SectionHeader idx="01." title="About me" />
      <div className="grid gap-[50px] grid-inner text-slate font-sans">
        <div className="space-y-3">
          {aboutMe.map((about) => (
            <p key={about}>{about}</p>
          ))}
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-1 font-mono">
            {technologies.map((tech) => (
              <li key={tech} className="list">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-green hover:bg-transparent rounded-2xl h-max">
          <Image
            src="/images/me.jpeg"
            alt="me"
            width={500}
            height={500}
            className="rounded-2xl mix-blend-multiply grayscale contrast-100 hover:mix-blend-normal hover:filter-none"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
