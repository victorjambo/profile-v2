const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="max-w-[600px] mx-auto mb-[100px] py-[100px] text-center"
    >
      <div className="text-green mb-5 font-mono">04. What&apos;s Next?</div>
      <div className="title font-sans font-semibold text-slate-lightest leading-[1.1] mb-[10px]">
        Get In Touch
      </div>
      <p className="font-sans text-slate mb-16">
        Although I&apos;m not currently looking for any new opportunities, my
        inbox is always open. Whether you have a question or just want to say
        hi, I&apos;ll try my best to get back to you!
      </p>
      <a
        href="mailto:victormutaijambo@gmail.com"
        className="text-green border border-green py-5 px-7 text-sm font-mono leading-[1] cursor-pointer rounded-md"
        target="_blank"
        rel="noreferrer"
      >
        Say Hello
      </a>
    </section>
  );
};

export default ContactSection;
