import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Standards from '@/components/Standards';
import MidCta from '@/components/MidCta';
import FeaturedCases from '@/components/FeaturedCases';
import Anim from '@/components/Anim';

export const metadata = {
  title: 'Utility & Grid-Scale Solutions — AKS Hithium',
  description: 'Tier-1 grid-scale battery energy storage — tender-ready with full EPC and financing support.',
};

const AUDIENCE = ['Renewable Energy Developers', 'EPCs', 'BPDB', 'REB', 'IPPs'];
const STATS = [
  ['150 GWh+', 'Hithium technology deployed worldwide'],
  ['11,000+ cycles', 'Charge cycles per LFP system'],
  ['2 GWh capacity', 'Annual assembly capacity in Bangladesh'],
  ['24/7 support', 'Dhaka-based monitoring and support'],
];
const CAPS = [
  ['/assets/image/cap-activity.svg', 'Grid Flex & Frequency Support', 'Millisecond response keeps grid frequency stable, integrating more solar and wind into the network without risk.'],
  ['/assets/image/cap-sun.svg', 'Renewable Firming', 'Convert intermittent generation into a dispatchable, bankable power block — generation you can schedule and rely on.'],
  ['/assets/image/cap-zap.svg', 'Transmission & Distribution Deferral', 'Relieve congested substations and defer costly network upgrades with strategically placed storage.'],
];
const TENDER = [
  ['Competitive Tender Participation', 'Full technical and commercial documentation built for procurement requirements', true],
  ['End-to-End EPC', 'Engineering, procurement, and construction delivered as one accountable package', true],
  ['Financing & Performance Guarantees', 'Backed by Hithium and our Chinese partners, making projects bankable', false],
];
const CASES = [
  ['/assets/image/ucase-1.png', 'Colorado, USA', 'HiTHIUM has successfully delivered an over 200MWh Battery Energy Storage System (BESS) to Whetstone Power in Denver, Colorado, achieving its Commercial Operation Date (COD)!'],
  ['/assets/image/ucase-2.png', 'Alxa, Inner Mongolia', 'Datang Inner Mongolia 1.7 million kW new energy storage project, capacity 490MW/980MWh, covers the Alxa league region — the 180MW/360MWh phase was recently completed and put into operation.'],
  ['/assets/image/ucase-3.png', 'Tongliang, Chongqing', 'As high temperatures continue nationwide, deployment of power-supply guarantees has increased. The Datang Chongqing Tongliang 100MW/200MWh centralized energy storage power station recently came online.'],
];

const pill = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-lg font-medium leading-6 transition-colors';

export default function UtilityGridScale() {
  return (
    <>
      <Anim />
      <Header variant="light" />

      {/* Hero */}
      <section className="mx-auto flex max-w-site flex-col gap-[112px] px-10 py-32 max-[620px]:px-6 max-[620px]:py-[72px]">
        <div className="flex items-end gap-10 max-[1000px]:flex-col max-[1000px]:items-start max-[1000px]:gap-8">
          <h1 data-reveal="heading" className="flex-1 text-[clamp(40px,4.6vw,64px)] font-medium leading-[1.12] tracking-[-1px] text-ink">Grid-Scale Storage for<br />Bangladesh&apos;s Energy Future.</h1>
          <div className="flex w-[493px] max-w-full shrink-0 flex-col gap-10">
            <p className="text-base leading-6 text-grey">Tier-1 battery energy storage that stabilises the grid, firms renewable generation, and defers costly infrastructure — delivered tender-ready, with full EPC and financing support backed by Hithium and our Chinese partners.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className={`${pill} bg-ink text-white hover:bg-[#333]`}>Discuss a Grid Project</a>
              <a href="#capabilities" className={`${pill} border border-ink bg-transparent text-ink hover:bg-ink hover:text-white`}>See Our Capabilities</a>
            </div>
          </div>
        </div>
        <div className="h-[622px] w-full overflow-hidden rounded-2xl"><img src="/assets/image/util-hero.png" alt="Aerial view of a grid-scale battery storage facility beside a substation at sunset" className="h-full w-full object-cover" /></div>
      </section>

      {/* Audience */}
      <section className="bg-sand py-32 max-[620px]:py-[72px]">
        <div className="mx-auto flex max-w-site flex-col gap-10 px-10 max-[620px]:px-6">
          <div className="flex items-center gap-3 font-mono text-sm uppercase leading-4 text-grey"><span className="hex bg-primary" aria-hidden="true" />Built for Industry</div>
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-5">
              <h2 data-reveal="heading" className="text-[clamp(40px,4.4vw,56px)] font-medium leading-[1.14] tracking-[-1px] text-ink">Built for the People Who Build the Grid</h2>
              <p className="max-w-[840px] text-lg font-medium leading-6 text-grey">From utility procurement to private generation, we deliver storage that meets the technical, commercial, and bankability standards grid-scale projects demand.</p>
            </div>
            <div data-marquee data-marquee-speed="35" className="-mx-10 max-[620px]:-mx-6">
              <div className="flex gap-3 px-10 max-[620px]:px-6">
                {AUDIENCE.map((a) => (<span key={a} className="whitespace-nowrap rounded-full border border-ink px-6 py-3 text-lg font-medium leading-6 text-ink">{a}</span>))}
              </div>
            </div>
            <div data-stagger className="flex gap-5 max-[1000px]:flex-wrap">
              {STATS.map(([n, d]) => (
                <div key={n} className="flex flex-1 flex-col gap-1 rounded-2xl bg-sand-2 px-4 py-5 max-[1000px]:flex-[1_1_45%]">
                  <div data-count className="text-[32px] font-medium leading-10 tracking-[-1px] text-ink">{n}</div>
                  <div className="text-base leading-6 text-grey">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="bg-ink py-32 text-white max-[620px]:py-[72px]">
        <div className="mx-auto flex max-w-site flex-col items-center gap-16 px-10 max-[620px]:px-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 font-mono text-sm uppercase leading-4 text-white"><span className="hex bg-white" aria-hidden="true" />Core Capabilities</div>
            <h2 data-reveal="heading" className="text-center text-[clamp(40px,4.4vw,56px)] font-medium leading-[1.14] tracking-[-1px] text-white">Storage That Strengthens the Grid</h2>
          </div>
          <div data-stagger className="flex w-full gap-5 max-[1000px]:flex-wrap">
            {CAPS.map(([icon, t, d]) => (
              <div key={t} className="flex h-[420px] flex-1 flex-col justify-between rounded-2xl bg-coal p-8 max-[1000px]:h-auto max-[1000px]:min-h-[320px] max-[1000px]:flex-[1_1_100%]">
                <div className="flex h-[50px] w-[50px] items-center justify-center"><img src={icon} alt="" className="h-10 w-10" /></div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-[32px] font-medium leading-10 tracking-[-1px] text-white">{t}</h3>
                  <p className="text-base leading-6 text-stroke">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tender */}
      <section className="px-10 py-16 max-[620px]:px-6">
        <div className="mx-auto flex max-w-site gap-20 max-[1000px]:flex-col max-[1000px]:gap-8">
          <div className="flex flex-1 flex-col gap-10">
            <div className="flex items-center gap-3 font-mono text-sm uppercase leading-4 text-grey"><span className="hex bg-primary" aria-hidden="true" />Tender Readiness</div>
            <div className="flex flex-col gap-4">
              <h2 data-reveal="heading" className="text-[clamp(40px,4.4vw,56px)] font-medium leading-[1.14] tracking-[-1px] text-ink">Tender-Ready, From Bid to Commissioning</h2>
              <p className="text-lg font-medium leading-6 text-grey">We participate in competitive tenders and provide full EPC and financing support — including performance guarantees backed by Hithium and our Chinese partners. You bring the project; we bring a bankable, deliverable, fully-supported solution.</p>
            </div>
          </div>
          <div className="flex w-[500px] max-w-full shrink-0 flex-col gap-8">
            {TENDER.map(([t, d, rule]) => (
              <div key={t} className="flex flex-col gap-2">
                <h4 className="text-2xl font-medium leading-8 tracking-[-1px] text-ink">{t}</h4>
                <p className="text-base leading-6 text-grey">{d}</p>
                {rule && <div className="mt-6 h-px bg-stroke-2" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedCases cases={CASES} />

      <Standards />

      <MidCta
        image="/assets/image/midcta-grid.png"
        title="Bangladesh Deserves Better Than Diesel."
        body="Power unreliability costs Bangladeshi industry billions every year — in wasted fuel, lost production, and missed export windows. We founded AKS Hithium Energy to change that: bringing the same Tier-1 technology that stabilises grids globally to the factories of Bangladesh."
      />

      <Footer />
    </>
  );
}
