// Reusable "Featured cases" case-study row (3 cards).
export default function FeaturedCases({ cases, sub = 'Comprehensive EPC and Financing Solutions with Guaranteed Performance' }) {
  return (
    <section className="mx-auto flex max-w-site flex-col gap-16 px-10 py-16 max-[620px]:px-6">
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-3 font-mono text-sm uppercase leading-4 text-grey"><span className="hex bg-primary" aria-hidden="true" />Case Studies</div>
        <div className="flex flex-col gap-4">
          <h2 data-reveal="heading" className="text-[clamp(40px,4.4vw,56px)] font-medium leading-[1.14] tracking-[-1px] text-ink">Featured cases</h2>
          <p className="text-lg font-medium leading-6 text-grey">{sub}</p>
        </div>
      </div>
      <div data-stagger className="flex gap-5 max-[1000px]:flex-col">
        {cases.map(([img, t, d]) => (
          <a key={t} href="#contact" className="group flex min-w-0 flex-1 flex-col gap-3">
            <div className="relative h-[328px] overflow-hidden rounded-md">
              <img src={img} alt={t} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-col items-center gap-4 px-2 text-center">
              <h3 className="w-full text-[24px] font-medium leading-[31px] tracking-[-0.48px] text-ink">{t}</h3>
              <p className="line-clamp-2 w-full text-lg leading-[27px] tracking-[-0.36px] text-grey">{d}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
