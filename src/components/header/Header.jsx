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

  return (
    <header>
      <div className="mx-auto flex items-center px-5 py-4 text-gray-800 lg:container md:px-10 lg:px-0">
        <div className="me-4 text-4xl font-black lowercase leading-none text-indigo-800 ">
          <a href="/">Podia</a>
        </div>

        <ul className="hidden lg:flex ">
          {navigation.map((navItem) => (
            <li key={navItem.label}>
              <a
                className="rounded-full p-4 text-xl hover:bg-gray-200/40"
                href={navItem.href}
              >
                {navItem.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ms-auto flex">
          <a
            className="me-2 rounded-full p-4 text-xl hover:bg-gray-200/40"
            href="/"
          >
            Login
          </a>

          <a
            className="rounded-full p-4 text-xl hover:bg-gray-200/40 lg:hidden"
            href="/"
          >
            Menu
          </a>

          <a
            href="/"
            className="hidden rounded-full bg-indigo-800 px-6 py-4 text-xl font-semibold text-white lg:block"
          >
            Sign up free
          </a>
        </div>
      </div>
    </header>
  );
};
