import { DEV_NAME, GIT_REPO } from "@/utils/data";
import { StarIcon } from "@heroicons/react/outline";

interface IProps {
  gitStats: {
    stars: number;
    forks: number;
    error?: boolean;
  };
}

const Footer: React.FC<IProps> = ({ gitStats }) => {
  return (
    <footer className="flex flex-col h-auto min-h-[70px] p-4 text-center">
      <div className="text-slate-500 dark:text-slate-light font-mono text-xs">
        <a href={GIT_REPO} className="p-[10px]">
          <div>
            Built by&nbsp;
            <span className="hover:text-sky-500 dark:hover:text-green">
              {DEV_NAME}
            </span>
          </div>

          <div className="mt-[10px]">
            <span className="inline-flex items-center px-2">
              <StarIcon className="h-3 w-3 inline-flex mr-1" />
              <span>{gitStats.stars}</span>
            </span>
            <span className="inline-flex items-center px-2">
              <StarIcon className="h-3 w-3 inline-flex" />
              <span>{gitStats.forks}</span>
            </span>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
