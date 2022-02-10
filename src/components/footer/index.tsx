import Image from "next/image";
import { DEV_NAME, GIT_REPO, social } from "@/utils/data";
import { StarIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import { Theme } from "@/utils/constants";

interface IProps {
  gitStats: {
    stars: number;
    forks: number;
    error?: boolean;
  };
}

const Footer: React.FC<IProps> = ({ gitStats }) => {
  const { theme } = useTheme();

  return (
    <footer className="flex flex-col h-auto min-h-[70px] text-center items-center">
      <div className="md:hidden flex flex-row space-x-8 items-center relative w-max">
        {social.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={theme === Theme.DARK ? item.icons.green : item.icons.blue}
              width={30}
              height={30}
              alt={item.name}
            />
          </a>
        ))}
      </div>
      <div className="text-sky-500 dark:text-green font-mono text-xs">
        <a href={GIT_REPO} className="p-[10px]">
          <div>
            Built by&nbsp;
            <span className="hover:text-sky-500 dark:hover:text-green">
              {DEV_NAME}
            </span>
          </div>

          <div className="mt-[10px]">
            <span className="inline-flex items-center px-2 space-x-1">
              <StarIcon className="h-3 w-3 inline-flex" />
              <span>{gitStats.stars}</span>
            </span>
            <span className="inline-flex items-center px-2 space-x-1">
              <Image
                src={`/images/social/icons8-git-merge-${
                  theme === Theme.DARK ? "green" : "blue"
                }.png`}
                width={12}
                height={12}
                alt=""
                className="inline-flex"
              />
              <span>{gitStats.forks}</span>
            </span>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
