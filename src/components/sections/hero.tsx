const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="max-w-[1000px] mx-auto">
      <div className="flex flex-col justify-center min-h-screen">
        <div className="text-teal-500 dark:text-green font-normal mb-5 sm:mb-[30px] mr-[2px] sm:mr-1 ">
          Hi, my name is
        </div>
        <div className="font-sans text-slate-lightest font-semibold leading-[1.1] hero-size">
          Victor Mutai.
        </div>
        <div className="font-sans text-slate font-semibold hero-size mt-[10px] leading-[0.9]">
          I build things for the web3.
        </div>
        <p className="mt-5 max-w-lg font-sans text-slate leading-[24px]">
          I&apos;m a software engineer specializing in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I&apos;m focused on building accessible, human-centered products at
          @SyndicateDao
        </p>
        <div className="mt-[50px]">
          <a className="text-green border border-green rounded py-5 px-7 text-sm">
            Check out my course!
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
