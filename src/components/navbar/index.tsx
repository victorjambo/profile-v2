import { Disclosure } from "@headlessui/react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/outline";
import { classNames } from "@/utils/classNames";
import ThemeDropdown from "./themeDropdown";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useScrollControl } from "@/context/scrollControl";

const navigation = [
  { id: "01", name: "About" },
  { id: "02", name: "Experience" },
  { id: "03", name: "Work" },
  { id: "04", name: "Contact" },
];

const defaultCurrentSection = {
  About: false,
  Experience: false,
  Work: false,
  Contact: false,
};

const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [currentSection, setCurrentSection] = useState<Record<string, boolean>>(
    defaultCurrentSection
  );

  const navRef = useRef(null);

  const { scrollInto, refs } = useScrollControl();

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (name: string) => {
    let currentRef;
    switch (name) {
      case "About":
        currentRef = refs?.About;
        setCurrentSection({ ...defaultCurrentSection, About: true });
        break;
      case "Contact":
        currentRef = refs?.Contact;
        setCurrentSection({ ...defaultCurrentSection, Contact: true });
        break;
      case "Experience":
        currentRef = refs?.Experience;
        setCurrentSection({ ...defaultCurrentSection, Experience: true });
        break;
      case "Work":
        currentRef = refs?.Work;
        setCurrentSection({ ...defaultCurrentSection, Work: true });
        break;
      default:
        break;
    }
    if (scrollInto) {
      scrollInto(currentRef);
    }
  };

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div
            ref={navRef}
            className={classNames(
              "h-[100px]",
              scrollTop === 0
                ? ""
                : "fixed inset-0 z-30 shadow shadow-sky-100 bg-sky-50 dark:shadow-slate-700 dark:bg-slate-800 bg-opacity-95 dark:bg-opacity-95"
            )}
          >
            <div className="container mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-[100px]">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuAlt2Icon
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <Link href="/" passHref>
                      <div className="flex flex-row zoom-hover-center text-3xl text-sky-500 dark:text-green cursor-pointer">
                        <span>&#123;</span>
                        <span className="text-2xl pt-1">VM</span>
                        <span>&#125;</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          onClick={() => handleScroll(item.name)}
                          className={classNames(
                            currentSection[item.name]
                              ? "text-sky-500 dark:text-green"
                              : "",
                            "zoom-hover-top px-3 py-2 text-xs hover:text-sky-500 dark:hover:text-green cursor-pointer"
                          )}
                        >
                          <span className="text-sky-500 dark:text-green pr-1">
                            {item.id}.
                          </span>
                          <span>{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                  <ThemeDropdown />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  className={classNames(
                    currentSection[item.name]
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                >
                  <span className="text-green pr-1">{item.id}.</span>
                  <span>{item.name}</span>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
