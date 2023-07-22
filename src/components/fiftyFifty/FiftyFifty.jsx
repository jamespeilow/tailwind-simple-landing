export const FiftyFifty = ({
  subtitle,
  title,
  description,
  cta,
  hero,
  image,
}) => {
  const titleClassName = hero
    ? "mb-5 font-serif text-4xl font-bold lg:text-5xl lg:leading-none"
    : "mb-4 font-serif text-xl font-bold lg:text-3xl lg:leading-none";

  const descriptionClassName = hero
    ? "text-lg leading-8 lg:text-xl lg:leading-loose"
    : "text-base leading-8 lg:text-lg";

  const ctaClassName =
    cta?.type === "button"
      ? "mt-10 rounded-full bg-indigo-800 px-6 py-6 text-xl font-semibold text-white inline-block"
      : "mt-6 font-semibold text-indigo-600 inline-block";

  return (
    <section className="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
          {subtitle}
        </p>

        <h1 className={titleClassName}>{title}</h1>

        <p className={descriptionClassName}>{description}</p>

        <a href={cta.url} className={ctaClassName}>
          {cta.text}
        </a>
      </div>

      <div className="-order-1 lg:order-1">
        {image && <img className="rounded-xl" src={image} />}
      </div>
    </section>
  );
};
