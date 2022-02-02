import { DEV_NAME, GIT_REPO } from "@/utils/data";
import { StarIcon } from "@heroicons/react/outline";

const Footer: React.FC = () => {
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
              <span>1,000</span>
            </span>
            <span className="inline-flex items-center px-2">
              <StarIcon className="h-3 w-3 inline-flex" />
              <span>1,000</span>
            </span>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
