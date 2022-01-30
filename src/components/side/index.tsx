const Side: React.FC = () => {
  return (
    <>
      <MainComponent orientation="left-10">
        <div className="flex flex-col items-center relative side">
          <a className="my-5 p-[10px] font-mono text-xs tracking-widest [writing-mode:vertical-lr]">
            victorjambo@live.com
          </a>
        </div>
      </MainComponent>
      <MainComponent orientation="right-10">
        <div className="flex flex-col items-center relative side">
          <a className="my-5 p-[10px] font-mono text-xs tracking-widest [writing-mode:vertical-rl]">
            victormutaijambo@gmail.com
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
    <div className={`fixed bottom-0 z-10 text-slate-light ${orientation}`}>
      {children}
    </div>
  );
};
