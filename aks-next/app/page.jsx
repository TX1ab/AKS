import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Standards from '@/components/Standards';
import Faq from '@/components/Faq';
import Anim from '@/components/Anim';

const ArrowUR = ({ stroke = '#ffffff' }) => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-5 w-5">
    <path d="M5 15L15 5M15 5H7M15 5V13" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ArrowLink = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
    <path d="M4 12L12 4M12 4H5.5M12 4V10.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const STATS = [
  ['150 GWh+', 'Hithium technology deployed worldwide'],
  ['11,000+ cycles', 'Charge cycles per LFP system'],
  ['2 GWh capacity', 'Annual assembly capacity in Bangladesh'],
  ['24/7 support', 'Dhaka-based monitoring and support'],
];
const WHY = [
  { t: 'Tier-1 Technology', d: "Every system runs on Hithium's LFP cells — a BloombergNEF Tier-1 manufacturer trusted by the world's largest energy projects across the USA and EU.", bg: 'bg-card-green', img: '/assets/image/why-icon-1.svg', cls: 'w-40 h-[170px] right-6 -bottom-[5px] rotate-[-90deg] origin-center' },
  { t: 'One Partner, Full Lifecycle', d: 'Engineering, supply, commissioning, and long-term after-sales under one roof. No finger-pointing between vendors — one accountable team from assessment to warranty.', bg: 'bg-card-blue', img: '/assets/image/why-icon-2.svg', cls: 'w-40 h-40 right-6 bottom-6' },
  { t: 'Built in Bangladesh', d: 'From 2027, local assembly, spare parts, and engineering build sovereign capability — faster logistics, local jobs, and real technology transfer.', bg: 'bg-card-violet', img: '/assets/image/why-icon-3b.svg', cls: 'w-[163px] h-[214px] right-2 -bottom-7' },
];
const STEPS = [
  ['01', '/assets/image/how-1.jpg', 'Engineer & Assess', 'We study your load profile, duty cycle, and site conditions to size the exact system you need.'],
  ['02', '/assets/image/how-2.png', 'Supply & Install', 'Tier-1 cells delivered and installed, with full integration into your power infrastructure or the grid.'],
  ['03', '/assets/image/how-3.jpg', 'Commission', 'Factory-tested systems brought online with rigorous on-site validation before handover.'],
  ['04', '/assets/image/how-4.png', 'Long-Term Support', '24/7 monitoring, rapid field response, and warranty management from our Dhaka engineering team.'],
];
const FAQ = [
  { q: 'What size systems do you offer?', a: 'From 100 kWh commercial cabinets to multi-MWh containerised and grid-scale installations — each sized to your specific load and duty cycle.' },
  { q: 'Who manufactures your batteries?', a: 'Every system uses LFP cells from Hithium, a BloombergNEF Tier-1 manufacturer with over 150 GWh deployed worldwide.' },
  { q: 'Why LFP instead of other chemistries?', a: 'LFP is inherently safe with no thermal runaway propagation, offers 11,000+ cycles, runs cobalt-free, and delivers high round-trip efficiency.' },
  { q: 'Do you provide installation and ongoing support?', a: 'Yes — we handle the full lifecycle: engineering, supply, commissioning, and 24/7 after-sales support from our Dhaka-based team.' },
  { q: 'What does "Built in Bangladesh" mean for me?', a: 'From 2027, local assembly means faster delivery, locally stocked spare parts, and a sovereign support capability rather than reliance on overseas logistics.' },
  { q: 'Can you support tender and EPC requirements?', a: 'Yes — we offer competitive tender participation with full EPC and financing support, backed by performance guarantees from Hithium.' },
];

export default function Home() {
  return (
    <>
      <Anim />
      {/* Hero */}
      <section data-parallax-trigger className="relative min-h-screen overflow-hidden bg-ink [isolation:isolate]">
        <img data-parallax="8" src="/assets/image/hero-bess.jpg" alt="AKS Hithium battery energy storage product range" className="parallax-img -z-20 object-[center_60%]" />
        <div className="absolute inset-0 -z-10 [background:linear-gradient(90deg,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0.4)_42%,rgba(0,0,0,0.12)_72%,rgba(0,0,0,0.18)_100%),linear-gradient(180deg,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.08)_32%,rgba(0,0,0,0.22)_100%)]" />
        <Header variant="dark" />
        <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-site px-10 pb-14 pt-7 max-[860px]:flex-col max-[860px]:gap-8 max-[620px]:px-6">
          <div className="flex w-[347px] shrink-0 flex-col justify-between pb-10 max-[860px]:w-full max-[860px]:flex-row max-[860px]:items-center max-[860px]:pb-0">
            <p className="font-mono text-sm font-medium uppercase leading-[21px] text-white">Secure Power<br />Solutions</p>
          </div>
          <div className="relative flex min-w-0 flex-1 flex-col justify-between pl-10 max-[860px]:pl-0">
            <span className="absolute -bottom-14 -top-7 left-0 w-px bg-white/15 max-[860px]:hidden" aria-hidden="true" />
            <div className="flex flex-col gap-10">
              <h1 className="text-[70px] font-medium leading-[70px] tracking-[-2.8px] text-white max-[1100px]:text-[56px] max-[1100px]:leading-[56px] max-[860px]:text-[clamp(40px,11vw,56px)] max-[860px]:leading-none">
                Nation-Building<br />Energy Storage.<br />Secure Power.
              </h1>
              <div className="flex flex-wrap gap-6">
                <a href="#contact" className="group inline-flex items-center gap-5 rounded-[50px] bg-white py-2 pl-5 pr-2 transition-transform hover:-translate-y-px max-[860px]:w-full max-[860px]:justify-between">
                  <span className="whitespace-nowrap text-base font-medium leading-6 tracking-[-0.32px] text-ink">Request a Consultation</span>
                  <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover:rotate-45"><ArrowUR /></span>
                </a>
              </div>
            </div>
            <div className="pt-8">
              <p className="max-w-[766px] text-lg font-medium leading-[27px] tracking-[-0.36px] text-white max-[480px]:text-base max-[480px]:leading-6">
                AKS Hithium Energy delivers Tier-1 battery storage in Bangladesh, combining global technology and local expertise to ensure reliable power for industry, manufacturing, and grids.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-24 text-ink max-[560px]:py-16">
        <div className="mx-auto flex max-w-site flex-col gap-[clamp(72px,11vw,164px)] px-10 max-[620px]:px-6">
          <div className="flex items-start gap-8 max-[980px]:flex-col max-[980px]:gap-4">
            <div className="flex w-[347px] shrink-0 items-center gap-3 pt-3 font-mono text-sm uppercase leading-[21px] text-ink max-[980px]:w-auto max-[980px]:pt-0">
              <span className="hex bg-primary" aria-hidden="true" />About us
            </div>
            <h2 className="max-w-[1011px] text-[clamp(32px,4.4vw,56px)] font-medium leading-[1.07] tracking-[-0.4px] text-black">
              Building a sovereign, reliable energy storage industry for Bangladesh — one that powers national growth and earns global trust.
            </h2>
          </div>
          <div className="flex items-start gap-16 max-[980px]:flex-col max-[980px]:gap-10">
            <div className="relative h-[463px] w-[695px] max-w-[695px] shrink-0 overflow-hidden rounded-md max-[980px]:w-full max-[980px]:max-w-full">
              <img data-parallax="6" src="/assets/image/about-port.jpg" alt="Containers and parked trucks at a Bangladesh port terminal" className="parallax-img" />
            </div>
            <div className="flex max-w-[641px] flex-1 flex-col gap-12 max-[980px]:max-w-full">
              <div className="flex flex-col gap-4">
                {STATS.map(([num, desc], i) => (
                  <div key={num}>
                    <div className="flex items-center gap-4 py-2 max-[560px]:flex-col max-[560px]:items-start max-[560px]:gap-1">
                      <div className="max-w-[350px] flex-[0_0_350px] text-[44px] font-medium leading-[1.1] tracking-[-2.4px] text-ink max-[560px]:flex-none max-[560px]:text-4xl max-[560px]:tracking-[-1.6px]">{num}</div>
                      <div className="min-w-0 flex-1 text-base leading-6 tracking-[-0.32px] text-grey">{desc}</div>
                    </div>
                    <hr className="h-px w-full border-0 bg-rule" />
                  </div>
                ))}
              </div>
              <a href="#contact" className="inline-flex h-10 items-center justify-center self-start rounded-full bg-ink px-5 text-base font-medium leading-6 tracking-[-0.32px] text-white transition-colors hover:bg-[#333]">Discuss Your Energy Goals</a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="bg-white py-32 text-ink max-[980px]:py-20">
        <div className="mx-auto flex max-w-site flex-col gap-12 px-10 max-[620px]:px-6">
          <div className="flex items-start gap-5 max-[980px]:flex-col max-[980px]:gap-4">
            <div className="flex w-[347px] shrink-0 items-center gap-3 pt-3 font-mono text-sm uppercase leading-[21px] text-ink max-[980px]:w-auto max-[980px]:pt-0">
              <span className="hex bg-primary" aria-hidden="true" />Solutions
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-4">
              <h2 className="max-w-[996px] text-[clamp(38px,4.6vw,64px)] font-medium leading-[1.1] tracking-[-3.2px] text-ink">One Partner. Two Solutions. Total Coverage.</h2>
              <p className="text-base leading-6 tracking-[-0.32px] text-ink">From a single factory to the national grid, we engineer storage to fit the load.</p>
            </div>
          </div>
          <div className="flex items-stretch gap-5 max-[980px]:flex-col">
            {[
              { t: 'Commercial & Industrial', d: "Containerised and cabinet BESS from 100 kWh to multiple MWh — built for factories, cold storage, and data centres that can't afford downtime.", link: 'Explore C&I Solutions', href: '/ci-solutions', img: '/assets/image/sol-ci.png', w: 'w-[685px] shrink-0 max-[980px]:w-full' },
              { t: 'Utility & Grid-Scale', d: 'Grid-flexible storage for developers, EPCs, and utilities — enabling frequency support, renewable firming, and tender-ready projects.', link: 'Explore Grid Solutions', href: '/utility-grid-scale', img: '/assets/image/sol-grid.jpg', w: 'flex-1 min-w-0' },
            ].map((c) => (
              <div key={c.t} className={`flex min-h-[520px] flex-col justify-between gap-6 rounded-2xl bg-sand p-8 max-[980px]:min-h-0 ${c.w}`}>
                <div>
                  <h3 className="whitespace-nowrap text-[32px] font-medium leading-[1.3] tracking-[-1.28px] text-ink max-[560px]:whitespace-normal max-[560px]:text-[26px] max-[560px]:tracking-[-1px]">{c.t}</h3>
                  <p className="mt-4 max-w-[439px] text-base leading-6 tracking-[-0.32px] text-ink/80">{c.d}</p>
                  <a href={c.href} className="mt-6 inline-flex items-center gap-2 text-base font-medium tracking-[-0.32px] text-black no-underline transition-all hover:gap-3.5">{c.link}<ArrowLink /></a>
                </div>
                <div className="h-[216px] shrink-0 overflow-hidden rounded-2xl"><img src={c.img} alt={c.t} className="h-full w-full object-cover" /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-ink py-32 text-white max-[980px]:py-20">
        <div className="mx-auto flex max-w-site flex-col gap-14 px-10 max-[620px]:px-6">
          <div className="flex items-center gap-3 font-mono text-sm uppercase leading-[21px] text-white"><span className="hex bg-white" aria-hidden="true" />Why AKS Hithium</div>
          <div className="flex items-stretch gap-5 max-[980px]:flex-col">
            {WHY.map((c) => (
              <div key={c.t} className={`relative h-[400px] flex-1 overflow-hidden rounded-md p-8 max-[980px]:h-auto max-[980px]:min-h-[320px] ${c.bg}`}>
                <h3 className="relative z-[1] whitespace-nowrap text-[32px] font-medium leading-[1.3] tracking-[-1.28px] text-ink">{c.t}</h3>
                <p className="relative z-[1] mt-4 text-base font-medium leading-6 tracking-[-0.32px] text-ink/80">{c.d}</p>
                <img src={c.img} alt="" aria-hidden="true" className={`pointer-events-none absolute block ${c.cls}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we Work */}
      <section className="bg-ink py-[120px] text-white max-[980px]:py-20">
        <div className="mx-auto flex max-w-site items-start gap-16 px-10 max-[980px]:flex-col max-[980px]:gap-10 max-[620px]:px-6">
          <div className="sticky top-[88px] w-[500px] shrink-0 self-start max-[980px]:static max-[980px]:w-full">
            <div className="flex items-center gap-3 font-mono text-sm uppercase leading-[21px] text-white"><span className="hex bg-white" aria-hidden="true" />How We Work</div>
            <h2 className="mt-8 text-[clamp(40px,4.4vw,64px)] font-medium leading-[1.1] tracking-[-3.2px]">A Clear Path from Challenge to Capacity</h2>
            <p className="mt-5 max-w-[500px] text-base leading-6 tracking-[-0.32px] text-muted-foot">From first assessment to long-term support, one accountable team takes your project from challenge to delivered capacity.</p>
          </div>
          <div className="min-w-0 flex-1">
            <div data-progress-track className="relative flex flex-col gap-14">
              <span className="absolute bottom-[430px] left-[29px] top-[30px] border-l-2 border-dashed border-grey max-[980px]:left-[23px]" aria-hidden="true" />
              <span data-progress-fill className="absolute bottom-[430px] left-[29px] top-[30px] w-0.5 origin-top bg-primary max-[980px]:left-[23px]" aria-hidden="true" />
              {STEPS.map(([n, img, t, d], i) => (
                <div key={n} className="relative flex items-start gap-10 max-[980px]:gap-5">
                  <div className={`relative z-[1] flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border bg-ink text-lg tracking-[-0.36px] text-white max-[980px]:h-12 max-[980px]:w-12 ${i === STEPS.length - 1 ? 'border-grey' : 'border-primary'}`}>{n}</div>
                  <div className="min-w-0 max-w-[500px] flex-1">
                    <div className="h-[280px] w-full overflow-hidden rounded-md max-[560px]:h-[200px]"><img src={img} alt={t} className="h-full w-full object-cover" /></div>
                    <h3 className="mt-10 text-[32px] font-medium leading-[1.3] tracking-[-1.28px] max-[560px]:text-[26px] max-[560px]:tracking-[-1px]">{t}</h3>
                    <p className="mt-4 text-base leading-6 tracking-[-0.32px] text-muted-foot">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-white py-32 text-ink max-[980px]:py-20">
        <div className="mx-auto flex max-w-site flex-col items-center gap-12 px-10 max-[620px]:px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-3 font-mono text-sm uppercase leading-[21px] text-black"><span className="hex bg-primary" aria-hidden="true" />Investors and Partners</div>
            <h2 className="text-[clamp(36px,4vw,56px)] font-medium leading-none tracking-[-1.68px] text-black">A Joint Venture<br />Built on Strength</h2>
            <p className="max-w-[840px] text-base leading-6 tracking-[-0.32px] text-grey">Local roots meet global technology leadership.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-[49px]">
            {[
              { logo: '/assets/image/partner-aks.png', alt: 'AKS Khan Holdings', p: "A respected Bangladeshi conglomerate with deep local roots, diversified expertise, and an unwavering commitment to the country's industrial future." },
              { logo: '/assets/image/partner-hithium.png', alt: 'Hithium', p: 'A top-five global BESS manufacturer with proprietary R&D, cell-to-system production, and deployments across five continents.' },
            ].map((c) => (
              <div key={c.alt} className="flex w-[431px] max-w-full flex-col items-start gap-4 rounded-lg border border-[#d5d5d5] p-6">
                <div className="flex h-14 items-center"><img src={c.logo} alt={c.alt} className="max-h-11 w-auto max-w-[170px] object-contain" /></div>
                <p className="text-base leading-6 tracking-[-0.32px] text-grey">{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="technology"><Standards /></div>
      <Faq title="Frequently Asked Questions" items={FAQ} variant="home" />
      <Footer />
    </>
  );
}
