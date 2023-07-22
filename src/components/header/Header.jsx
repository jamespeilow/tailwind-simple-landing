import clsx from "clsx";
import { useEffect, useState } from "react";

export const Header = () => {
  const navigation = [
    {
      label: "Features",
      href: "/",
    },
    {
      label: "Examples",
      href: "/",
    },
    {
      label: "Pricing",
      href: "/",
    },
    {
      label: "Demo",
      href: "/",
    },
    {
      label: "Resources",
      href: "/",
    },
  ];

  const [headerScroll, setHeaderScroll] = useState(true);

  const handleHeaderScroll = () => {
    const pastThreshold = window.scrollY > 100;

    setHeaderScroll(pastThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHeaderScroll);

    handleHeaderScroll();

    return () => {
      window.removeEventListener("scroll", handleHeaderScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 transition duration-500",
        headerScroll && "bg-white shadow-md",
      )}
    >
      <div className="mx-auto flex items-center px-5 py-3 text-gray-800 md:px-10 lg:max-w-7xl lg:px-0">
        <div className="me-4 text-3xl font-black lowercase leading-none text-indigo-800 ">
          <a href="/">Podia</a>
        </div>

        <ul className="hidden lg:flex ">
          {navigation.map((navItem) => (
            <li key={navItem.label}>
              <a
                className="rounded-full p-4 text-lg hover:bg-gray-200/40"
                href={navItem.href}
              >
                {navItem.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ms-auto flex items-center">
          <a
            className="me-2 rounded-full p-4 text-lg hover:bg-gray-200/40"
            href="/"
          >
            Login
          </a>

          <a
            className="rounded-full p-4 text-lg hover:bg-gray-200/40 lg:hidden"
            href="/"
          >
            Menu
          </a>

          <a
            href="/"
            className="hidden rounded-full bg-indigo-800 px-6 py-3 text-lg font-medium text-white lg:block"
          >
            Sign up free
          </a>
        </div>
      </div>
    </header>
  );
};
