import { SectionHeader } from ".";

import { Tab } from "@headlessui/react";
import { classNames } from "@/utils/classNames";

const companies = [
  {
    name: "SyndicateDao",
    role: "Engineer",
    duration: "May 2021 - Present",
    link: "https://mutai.dev",
    responsibilities: `<ul class="space-y-2">
      <li class="list">Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
      <li class="list">Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
      <li class="list">Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
      </ul>`,
  },
  {
    name: "Prezi",
    role: "Engineer",
    duration: "Jan 2019 - April 2021",
    link: "https://mutai.dev",
    responsibilities: `<ul class="space-y-2">
      <li class="list">Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
      <li class="list">Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
      <li class="list">Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
      </ul>`,
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="max-w-[700px] mx-auto py-[100px]">
      <SectionHeader idx="02." title="Where I've Worked" />

      <Tab.Group>
        <div className="min-h-[340px] flex flex-row text-slate-light">
          <Tab.List className="flex flex-col w-max">
            {companies.map((company) => (
              <Tab
                key={company.name}
                className={({ selected }) =>
                  classNames(
                    "flex items-center h-[42px] px-5 pb-[2px] border-l-2 cursor-pointer font-mono text-[13px] text-left whitespace-nowrap hover:bg-blue-navy-light",
                    selected
                      ? "border-green text-green"
                      : "border-blue-navy-lightest"
                  )
                }
              >
                {company.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="ml-5 font-sans">
            {companies.map((company) => (
              <Tab.Panel
                key={company.name}
                className="px-[5px] py-[10px] h-auto w-full"
              >
                <div className="mb-[2px] text-[22px] font-medium leading-snug text-slate-lightest">
                  {company.role}&nbsp;&nbsp;
                  <a
                    href={company.link}
                    target="_blank"
                    className="text-green cursor-pointer inline-block"
                    rel="noreferrer"
                  >
                    @{company.name}
                  </a>
                </div>
                <div className="mb-6 text-slate-light text-xs font-mono">
                  {company.duration}
                </div>
                <div
                  className="text-slate font-sans leading-[24px]"
                  dangerouslySetInnerHTML={{ __html: company.responsibilities }}
                />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </section>
  );
};

export default ExperienceSection;
