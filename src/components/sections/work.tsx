/* eslint-disable @next/next/no-img-element */
import { projects } from "@/utils/data";
import { ExternalLinkIcon, ShareIcon } from "@heroicons/react/outline";
import { SectionHeader } from ".";

const WorkSection: React.FC = () => {
  return (
    <section id="work" className="max-w-[1000px] mx-auto py-[100px]">
      <SectionHeader idx="03." title="Some Things I've Built" />

      <ul className="font-sans space-y-[100px]">
        {projects.map((project) => (
          <li
            key={project.name}
            className="grid grid-col-featured gap-[10px] items-center idea"
          >
            <div className="project-content">
              <div>
                <p className="py-[10px] text-green font-mono text-xs">
                  Featured Project
                </p>

                <h3 className="mb-5 text-slate-lightest hover:text-green featured-size font-semibold">
                  <a href={project.link}>{project.name}</a>
                </h3>

                <div className="text-slate-light p-[25px] rounded bg-blue-navy-light project-description-shadow">
                  <p>{project.body}</p>
                </div>

                <ul className="flex flex-wrap mt-[25px] mb-[10px] font-mono text-slate-light text-xs">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className="flex items-center mt-[10px] -ml-[10px] text-slate-lightest externals">
                  {project.learnMore && (
                    <a
                      href={project.learnMore}
                      className="text-green hover:bg-green-tint border border-green rounded py-3 px-4 font-mono m-[10px] text-xs"
                    >
                      Learn More
                    </a>
                  )}
                  {project.git && (
                    <a href={project.git} className="p-[10px]">
                      <ShareIcon className="w-5 h-5" />
                    </a>
                  )}
                  {project.share && (
                    <a href={project.share} className="p-[10px]">
                      <ExternalLinkIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-image">
              <a href={project.link}>
                <img
                  src={project.image}
                  alt=""
                  className="w-full object-cover"
                />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkSection;
