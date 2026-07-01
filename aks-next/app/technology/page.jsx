import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Standards from '@/components/Standards';
import MidCta from '@/components/MidCta';
import Faq from '@/components/Faq';
import Anim from '@/components/Anim';

export const metadata = {
  title: 'Technology & Support — AKS Hithium',
  description: 'Tier-1 LFP cells, international standards, and a Dhaka-based engineering team. Local assembly from 2027.',
};

const HERO_STATS = [
  ['150 GWh+', 'Global Hithium deployments'],
  ['Tier-1', 'BloombergNEF-ranked manufacturer'],
  ['11,000+', 'Charge cycles per LFP system'],
  ['24/7', 'Dhaka-based monitoring and support'],
];
const CELLS = [
  ['/assets/image/cell-safe.svg', 'Inherently Safe', 'Stable chemistry with no thermal runaway propagation'],
  ['/assets/image/cell-cycle.svg', 'Long Cycle Life', '11,000+ charge cycles per system'],
  ['/assets/image/cell-eff.svg', 'High Round-Trip Efficiency', 'More of your stored energy delivered back'],
  ['/assets/image/cell-leaf.svg', 'Zero Cobalt', 'Aligned with global responsible sourcing practices'],
];
const ASSEMBLY = [
  ['/assets/image/asm-truck.svg', 'Faster Delivery, Lower Cost', 'Reduced logistics time and expense'],
  ['/assets/image/asm-users.svg', 'Local Employment', 'Skills and capability that stay in the country'],
  ['/assets/image/asm-flag.svg', 'National Vision', "Supporting the government's 'Build in Bangladesh' goals"],
  ['/assets/image/asm-check.svg', 'Full Quality Control', "Built to Hithium's global manufacturing protocols"],
];
const FAQ = [
  { q: 'What project sizes can you support?', a: "From distributed grid-support installations to multi-MWh utility-scale systems, each engineered to the network's technical requirements." },
  { q: 'Can you support our tender submission?', a: 'Yes. We participate in competitive tenders with full technical and commercial documentation, end-to-end EPC, and financing and performance guarantees backed by Hithium and our Chinese partners.' },
  { q: 'Are the systems bankable?', a: 'Yes. Tier-1 LFP cells, full certification, and warranty-backed performance guarantees from Hithium meet the standards lenders and utilities require.' },
  { q: 'How fast is the frequency response?', a: 'Millisecond-level response keeps grid frequency stable, allowing more solar and wind to be integrated into the network without risk.' },
  { q: 'Do you provide ongoing performance support?', a: 'Yes. Our Dhaka-based team provides 24/7 monitoring, rapid field response, and warranty management across the full system lifecycle.' },
];

const pill = 'inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-medium leading-6 transition-colors';

export default function Technology() {
  return (
    <>
      <Anim />
      <Header variant="light" />

      {/* Hero */}
      <section className="mx-auto w-full max-w-site px-10 pb-16 pt-32 max-[620px]:px-6 max-[620px]:pt-[72px]">
        <div className="flex items-start gap-16 max-[1000px]:flex-col">
          <div className="flex flex-1 flex-col gap-10 max-[1000px]:order-2">
            <div className="flex flex-col gap-6">
              <h1 data-reveal="heading" className="max-w-[675px] text-[clamp(40px,4.6vw,64px)] font-medium leading-[1.12] tracking-[-1px] text-ink">Tier-1 Cells. International Standards. Local Support and Assembly.</h1>
              <p className="text-lg leading-6 text-grey">Every AKS Hithium system is built on globally certified LFP technology — proven across 150 GWh of deployments worldwide, and backed by a Dhaka-based engineering team that knows your site.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className={`${pill} bg-ink text-white hover:bg-[#333]`}>Talk to an Engineer</a>
              <a href="#contact" className={`${pill} border border-stroke bg-white text-ink hover:bg-sand`}>Download Technical Datasheets</a>
            </div>
          </div>
          <div className="relative h-[560px] w-[500px] max-w-full shrink-0 max-[1000px]:order-1 max-[1100px]:w-[440px] max-[620px]:h-[460px] max-[620px]:w-full">
            <img src="/assets/image/tech-hero-photo.jpg" alt="Hithium battery technology" className="absolute right-0 top-0 h-[420px] w-[420px] rounded-[20px] object-cover max-[1100px]:h-[360px] max-[1100px]:w-[360px] max-[620px]:h-[300px] max-[620px]:w-[78%]" />
            <img src="/assets/image/tech-hero-hex.svg" alt="" aria-hidden="true" className="absolute bottom-0 left-0 w-[340px] max-[1100px]:w-[296px] max-[620px]:w-[228px]" />
            <img src="/assets/image/tech-hero-hexframe.png" alt="AKS Hithium BESS container at a solar site" className="absolute bottom-[20px] left-[20px] w-[300px] max-[1100px]:w-[260px] max-[620px]:w-[200px]" />
          </div>
        </div>
        {/* Stats strip */}
        <div data-stagger className="mt-16 flex flex-wrap items-start justify-between gap-8 py-12">
          {HERO_STATS.map(([n, d]) => (
            <div key={n} className="flex w-[300px] max-w-full flex-col items-center gap-2 text-center max-[620px]:w-[45%]">
              <p data-count className="text-[32px] font-medium leading-10 tracking-[-1px] text-ink">{n}</p>
              <p className="text-base leading-6 text-grey">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* After Sales — Global Hardware. Local Care. */}
      <section className="bg-[#141414] px-10 py-32 text-white max-[620px]:px-6 max-[620px]:py-20">
        <div className="mx-auto flex max-w-site flex-col gap-10">
          <div className="flex items-center gap-3 font-mono text-sm uppercase leading-4 text-white"><span className="hex bg-white" aria-hidden="true" />Local Care</div>
          <div className="flex items-center gap-20 max-[1000px]:flex-col max-[1000px]:items-start max-[1000px]:gap-8">
            <h2 data-reveal="heading" className="flex-1 text-[clamp(40px,4.4vw,56px)] font-medium leading-[1.14] tracking-[-1px] text-white">Global Hardware. Local Care.</h2>
            <p className="w-[600px] max-w-full text-lg leading-6 text-[#9ca3af]">Our Dhaka-based engineering team monitors your system 24/7 — providing rapid field response, warranty management, and capacity assurance — with direct access to the global expertise of our venture partner, Hithium. You get world-class technology supported by people on the ground here in Bangladesh.</p>
          </div>
        </div>
      </section>

      {/* Powered by Hithium — cell tech */}
      <section className="bg-white px-10 py-32 max-[620px]:px-6 max-[620px]:py-20">
        <div className="mx-auto flex max-w-site items-end gap-16 max-[1000px]:flex-col max-[1000px]:items-start max-[1000px]:gap-10">
          <div className="flex w-[401px] max-w-full shrink-0 flex-col gap-10">
            <div className="flex items-center gap-3 font-mono text-sm uppercase leading-4 text-grey"><span className="hex bg-primary" aria-hidden="true" />Cell Technology</div>
            <div className="flex flex-col gap-4">
              <h2 data-reveal="heading" className="text-[clamp(40px,4.4vw,56px)] font-medium leading-[1.14] tracking-[-1px] text-black">Powered by HITHIUM</h2>
              <p className="text-lg leading-6 text-grey">Every system is built around Hithium&apos;s lithium iron phosphate (LFP) cells — proven in over 150 GWh of global deployments. Hithium is a BloombergNEF Tier-1 manufacturer.</p>
            </div>
          </div>
          <div data-stagger className="grid min-w-0 flex-1 grid-cols-4 gap-5 max-[1000px]:grid-cols-2 max-[560px]:grid-cols-1">
            {CELLS.map(([icon, t, d]) => (
              <div key={t} className="flex h-[220px] flex-col items-start justify-between rounded-2xl bg-sand p-5">
                <img src={icon} alt="" className="h-10 w-auto self-start" />
                <div className="flex flex-col gap-2">
                  <p className="text-2xl font-medium leading-8 tracking-[-1px] text-black">{t}</p>
                  <p className="text-base leading-6 text-black">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assembled in Bangladesh */}
      <section className="bg-white px-10 py-32 max-[620px]:px-6 max-[620px]:py-20">
        <div className="mx-auto flex max-w-site items-start gap-10 max-[1000px]:flex-col">
          <div className="flex w-[630px] max-w-full shrink-0 flex-col gap-10">
            <div className="flex items-center gap-3 font-mono text-sm uppercase leading-4 text-black"><span className="hex bg-primary" aria-hidden="true" />Manufacturing</div>
            <div className="flex flex-col gap-4">
              <h2 data-reveal="heading" className="text-[clamp(40px,4.4vw,56px)] font-medium leading-[1.14] tracking-[-1px] text-black">Assembled in Bangladesh,<br />from 2027</h2>
              <p className="text-lg leading-6 text-grey">We operate under an exclusive venture with Hithium for corporate, industrial, and grid applications — establishing Bangladesh&apos;s first dedicated BESS assembly line.</p>
            </div>
          </div>
          <div data-stagger className="flex min-w-0 flex-1 flex-col gap-5">
            {ASSEMBLY.map(([icon, t, d]) => (
              <div key={t} className="flex items-start gap-5 rounded-2xl border border-sand-2 px-8 py-5">
                <img src={icon} alt="" className="h-8 w-8 shrink-0" />
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <p className="text-2xl font-medium leading-8 tracking-[-1px] text-black">{t}</p>
                  <p className="text-lg leading-6 text-black">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Standards />

      <MidCta
        image="/assets/image/midcta-tech.png"
        title="Bangladesh Deserves Better Than Diesel."
        body="Power unreliability costs Bangladeshi industry billions every year — in wasted fuel, lost production, and missed export windows. We founded AKS Hithium Energy to change that: bringing the same Tier-1 technology that stabilises grids globally to the factories of Bangladesh."
      />

      <Faq title="Common Questions from Developers & Utilities" items={FAQ} variant="util" />
      <Footer />
    </>
  );
}
