const CERTS = [
  { src: '/assets/image/cert-new-1.svg', alt: 'IEC 62619' },
  { src: '/assets/image/cert-new-2.svg', alt: 'Fire safety' },
  { src: '/assets/image/cert-new-3.svg', alt: 'BMS' },
  { src: '/assets/image/cert-new-4.svg', alt: 'UL 1973' },
  { src: '/assets/image/cert-new-5.svg', alt: 'UN Transport' },
];

export default function Standards() {
  return (
    <section data-parallax-trigger className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img data-parallax="15" src="/assets/image/standards-bg-new.png" alt="" className="parallax-img object-bottom" />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white from-[42%] to-transparent" />
      <div className="relative z-[1] mx-auto flex max-w-site flex-col items-center gap-10 px-10 pb-[400px] pt-16 max-[980px]:px-6">
        <div className="flex items-center gap-3 font-mono text-sm uppercase leading-4 text-grey">
          <span className="hex bg-primary" aria-hidden="true" />
          Certifications &amp; Safety
        </div>
        <div className="flex flex-col items-center gap-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <h2 data-reveal="heading" className="text-center text-[56px] font-medium leading-[64px] tracking-[-1px] text-ink max-[620px]:text-[40px] max-[620px]:leading-[1.1]">
              Engineered to
              <br />
              International Standards
            </h2>
            <p className="text-center text-lg font-medium leading-6 text-grey">
              Every system is certified, safety-tested, and factory-validated before it ships.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div data-stagger className="flex flex-wrap items-center justify-center gap-5">
              {CERTS.map((c) => (
                <div key={c.alt} className="flex h-40 w-40 shrink-0 items-center justify-center">
                  <img src={c.src} alt={c.alt} className="h-[88px] w-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
