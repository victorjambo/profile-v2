import { Disclosure } from "@headlessui/react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/outline";
import { classNames } from "@/utils/classNames";
import ThemeDropdown from "./themeDropdown";

const navigation = [
  { id: "01", name: "About", href: "#about", current: true },
  { id: "02", name: "Experience", href: "#experience", current: false },
  { id: "03", name: "Work", href: "#work", current: false },
  { id: "04", name: "Contact", href: "#contact", current: false },
];

const Navbar = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
        <div className="fixed inset-0 h-[100px] shadow nav-shadow">
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
                  <img
                    className="block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? "text-teal-500 dark:text-green" : "",
                          "px-3 py-2 text-xs hover:text-teal-500 dark:hover:text-green"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <span className="text-teal-500 dark:text-green pr-1">
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
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
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
