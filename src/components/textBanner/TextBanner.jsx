export const TextBanner = ({
  title = "Lorem Ipsum Dolor",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
}) => {
  return (
    <section className="mx-auto max-w-5xl text-center">
      <h2 className="font-serif text-2xl font-semibold lg:text-4xl">{title}</h2>
      <p className="mt-2 text-lg text-gray-500 lg:text-xl lg:leading-loose">
        {description}
      </p>
    </section>
  );
};
