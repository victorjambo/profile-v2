import { useDeviceDetect } from "@/context/deviceDetect";
import { classNames } from "@/utils/classNames";

interface IProps {
  idx: string;
  title: string;
}

export const SectionHeader: React.FC<IProps> = ({ idx, title }) => {
  const { isMobile } = useDeviceDetect();
  return (
    <div className={classNames("section-header-size flex items-end mt-[10px] mb-10 font-semibold leading-[1.1]", isMobile ? "" : "section-header")}>
      <span className="section-header-size-2 mr-[10px] font-normal relative bottom-1 text-sky-500 dark:text-green">
        {idx}
      </span>
      <span className="font-sans">{title}</span>
    </div>
  );
};
