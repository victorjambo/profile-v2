import Image from "next/image";
import { DEV_EMAIL, social } from "@/utils/data";

const Side: React.FC = () => {
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
              <Image src={item.icon} width={21} height={21} alt={item.name} />
            </a>
          ))}
        </div>
      </MainComponent>
      <MainComponent orientation="right-10">
        <div className="flex flex-col items-center relative side">
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
    <div
      className={`fixed bottom-0 z-10 text-sky-500 dark:text-slate-light ${orientation}`}
    >
      {children}
    </div>
  );
};
