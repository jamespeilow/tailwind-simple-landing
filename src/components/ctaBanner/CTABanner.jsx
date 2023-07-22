export const CTABanner = ({ title, description, cta }) => {
  return (
    <section className="rounded-lg bg-indigo-950 p-6 text-center text-white md:p-10 lg:p-16">
      <h2 className="font-serif text-2xl font-semibold lg:text-4xl">{title}</h2>
      <p className="mt-2 text-base text-indigo-100 lg:text-lg lg:leading-loose">
        {description}
      </p>

      {cta?.href && (
        <div className="mt-8 inline-block rounded-full bg-purple-400 px-6 py-4 transition-colors duration-300 hover:bg-violet-700">
          <a href={cta.href}>{cta.label}</a>
        </div>
      )}
    </section>
  );
};
