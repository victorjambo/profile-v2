import Image from "next/image";
import { DEV_EMAIL, social } from "@/utils/data";
import { useTheme } from "next-themes";
import { Theme } from "@/utils/constants";

const Side: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      <MainComponent orientation="left-10">
        <div className="flex flex-col space-y-2 items-center relative side">
          {social.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={theme === Theme.DARK ? item.icons.green : item.icons.blue}
                width={21}
                height={21}
                alt={item.name}
              />
            </a>
          ))}
        </div>
      </MainComponent>
      <MainComponent orientation="right-10">
        <div className="flex flex-col items-center relative side text-sky-500 dark:text-green">
          <a className="my-5 p-[10px] font-mono text-xs tracking-widest [writing-mode:vertical-rl] cursor-pointer">
            {DEV_EMAIL}
          </a>
        </div>
      </MainComponent>
    </>
  );
};

export default Side;

const MainComponent: React.FC<{ orientation: string }> = ({
  children,
  orientation,
}) => {
  return (
    <div className={`fixed bottom-0 z-10 text-slate ${orientation}`}>
      {children}
    </div>
  );
};
