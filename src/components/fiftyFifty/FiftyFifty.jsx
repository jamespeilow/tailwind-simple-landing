export const FiftyFifty = ({
  subtitle,
  title,
  description,
  cta,
  hero,
  image,
}) => {
  const titleClassName = hero
    ? "mb-4 font-serif text-4xl font-bold lg:text-5xl lg:leading-normal"
    : "mb-4 font-serif text-xl font-bold lg:text-3xl lg:leading-normal";

  const descriptionClassName = hero
    ? "text-gray-600 text-lg leading-8 lg:text-xl lg:leading-loose"
    : "text-gray-600 text-base leading-8 lg:text-lg";

  const ctaClassName =
    cta?.type === "button"
      ? "mt-10 rounded-full bg-indigo-800 px-6 py-6 text-xl font-semibold text-white inline-block"
      : "mt-6 font-semibold text-indigo-600 inline-block";

  return (
    <section className="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-stone-400 lg:mb-2">
          {subtitle}
        </p>

        <h1 className={titleClassName}>{title}</h1>

        <p className={descriptionClassName}>{description}</p>

        <a href={cta.href} className={ctaClassName}>
          {cta.text}
        </a>
      </div>

      <div className="-order-1 lg:order-1">
        {image && <img className="rounded-xl" src={image} />}
      </div>
    </section>
  );
};
