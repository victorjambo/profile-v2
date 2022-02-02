interface IProps {
  idx: string;
  title: string;
}

export const SectionHeader: React.FC<IProps> = ({ idx, title }) => {
  return (
    <div className="section-header section-header-size flex items-end mt-[10px] mb-10 font-semibold leading-[1.1]">
      <span className="section-header-size-2 mr-[10px] font-normal relative bottom-1 text-sky-500 dark:text-green">
        {idx}
      </span>
      <span className="font-sans">{title}</span>
    </div>
  );
};
