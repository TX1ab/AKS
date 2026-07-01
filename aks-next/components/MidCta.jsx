// Reusable image banner CTA: left headline, right body + pill button.
export default function MidCta({ image, title, body, cta = 'Discuss a Grid Project', href = '#contact' }) {
  return (
    <section className="bg-white px-10 py-16 max-[620px]:px-6">
      <div data-parallax-trigger className="relative mx-auto flex h-[750px] max-w-[1360px] items-end justify-center gap-6 overflow-hidden rounded-[32px] p-10 max-[1000px]:h-auto max-[1000px]:flex-col max-[1000px]:items-start max-[1000px]:gap-8">
        <img data-parallax="10" src={image} alt="" className="parallax-img" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 from-[24%] to-transparent" />
        <div className="relative z-[1] flex w-full max-w-[1280px] items-start justify-center gap-6 max-[1000px]:flex-col">
          <h2 data-reveal="heading" className="flex-1 text-[clamp(36px,4.4vw,56px)] font-medium leading-[1.14] tracking-[-1px] text-white">{title}</h2>
          <div className="flex w-[600px] max-w-full shrink-0 flex-col gap-6">
            <p className="text-lg font-medium leading-6 text-white">{body}</p>
            <a href={href} className="inline-flex items-center justify-center self-start rounded-full bg-white px-8 py-4 text-lg font-medium leading-6 text-ink transition-colors hover:bg-[#ededed]">{cta}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
