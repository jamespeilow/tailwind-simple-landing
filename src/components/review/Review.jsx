export const Review = ({ rating, review, author }) => {
  return (
    <section className="mx-auto max-w-[960px] text-center">
      <div className="mb-4 flex items-center justify-center gap-5 text-xl">
        {Array.from({ length: rating }).map((_, index) => (
          <span key={index}>⭐</span>
        ))}
      </div>

      <p className="mb-6 font-serif text-lg lg:text-xl lg:leading-relaxed">
        {review}
      </p>

      {author && (
        <p className="text-gray-600 lg:text-lg">
          {"— "}
          {author}
        </p>
      )}
    </section>
  );
};
