import clsx from "clsx";
import { useEffect, useState, useRef } from "react";

export const Header = () => {
  const navigation = [
    {
      label: "Features",
      href: "/",
      childLinks: [
        {
          label: "Website Builder",
          href: "#",
        },
        {
          label: "Digital products",
          href: "#",
        },
        {
          label: "Community",
          href: "#",
        },
      ],
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
      childLinks: [
        {
          label: "Child Link",
          href: "#",
        },
      ],
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

        <ul className="hidden lg:flex">
          {navigation.map((navItem) => (
            <li key={navItem.href}>
              <LinkItem navItem={navItem} />
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

const LinkItem = (props) => {
  const { navItem } = props;

  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const megaNavDisplayClass = isActive ? "block" : "hidden";

  if (navItem.childLinks?.length > 0) {
    return (
      <div className="relative" ref={ref}>
        <button
          className="flex items-center rounded-full p-4 text-lg hover:bg-gray-200/40"
          href={navItem.href}
          onClick={() => setIsActive(!isActive)}
        >
          {navItem.label}

          {navItem.childLinks?.length > 0 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-gray-800"
            >
              <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
            </svg>
          )}
        </button>

        <div
          className={clsx(
            "absolute left-0 top-full w-auto rounded border border-gray-400/20 bg-white p-6 shadow",
            megaNavDisplayClass,
          )}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-stone-400 lg:mb-2">
            Heading
          </p>

          <ul>
            {navItem.childLinks?.map((childLink) => (
              <li key={childLink.label}>
                <a
                  href={childLink.href}
                  className="block min-w-max text-sm leading-10 text-inherit hover:text-indigo-800"
                >
                  {childLink.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <a
      className="flex items-center rounded-full p-4 text-lg hover:bg-gray-200/40"
      href={navItem.href}
    >
      {navItem.label}
    </a>
  );
};
