import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Standards from '@/components/Standards';
import MidCta from '@/components/MidCta';
import FeaturedCases from '@/components/FeaturedCases';
import Anim from '@/components/Anim';

export const metadata = {
  title: 'C&I Solutions — AKS Hithium',
  description: 'Battery energy storage engineered for factories, processing plants, and data centres across Bangladesh.',
};

const STATS = [
  ['150 GWh+', 'Hithium technology deployed worldwide'],
  ['11,000+ cycles', 'Charge cycles per LFP system'],
  ['2 GWh capacity', 'Annual assembly capacity in Bangladesh'],
  ['24/7 support', 'Dhaka-based monitoring and support'],
];
const SECTORS = [
  ['/assets/image/sector-garments.jpg', 'Garments'],
  ['/assets/image/sector-textiles.jpg', 'Textiles'],
  ['/assets/image/sector-cold.jpg', 'Cold Storage'],
  ['/assets/image/sector-agro.jpg', 'Agro-processing'],
  ['/assets/image/sector-pharma.png', 'Pharmaceuticals'],
  ['/assets/image/sector-data.jpg', 'Data Centres'],
];
const REASONS = [
  ['/assets/image/reason-1.png', 'Lower Electricity Bills', 'Shift consumption away from peak tariffs and cut diesel spend — turning energy from a volatile cost into a predictable, managed one.'],
  ['/assets/image/reason-2.png', 'Higher Production Uptime', 'Seamless backup keeps critical lines running through grid outages, protecting output, deadlines, and buyer confidence.'],
  ['/assets/image/reason-3.png', 'A Smaller Carbon Footprint', 'Cleaner energy use reduces emissions and supports the compliance evidence international buyers increasingly require.'],
];
const WORK = [
  ['/assets/image/ci-why-1.svg', 'Factory Power Assurance', 'Seamless backup for critical loads the moment the grid fails — eliminating diesel generator runtime and the fuel, noise, and maintenance that come with it.'],
  ['/assets/image/ci-why-2.svg', 'Peak Demand Management', 'Discharge stored energy during peak-tariff windows to slash monthly demand charges, without changing how your plant operates.'],
  ['/assets/image/ci-why-3.svg', 'PV + Storage Integration', "Maximise rooftop solar by storing daytime surplus for evening production or low-light periods — getting full value from every panel you've installed."],
];
const CASES = [
  ['/assets/image/case-1.png', 'Romania Project', '36 sets of Hithium 125kW/261kWh energy storage integrated machines, utilizing HiTHIUM 314Ah battery cells.'],
  ['/assets/image/case-2.png', 'Czech public Project', '42 sets of Hithium 125kW/261kWh energy storage integrated machines, utilizing Hithium 314Ah battery cells.'],
  ['/assets/image/case-3.png', 'Zhoushan, Zhejiang', 'Recently, an energy storage station owned by Zhejiang Petrochemical & Chemical Co., Ltd goes live successfully. As a core equipment supplier, HiTHIUM provided comprehensive, high-safety solutions.'],
];

const btnDark = 'inline-flex h-10 items-center justify-center rounded-full bg-ink px-5 text-lg font-medium leading-6 text-white transition-colors hover:bg-[#333]';

export default function CISolutions() {
  return (
    <>
      <Anim />
      <Header variant="light" />

      {/* Hero */}
      <section className="mx-auto flex max-w-site flex-col gap-20 px-10 py-32 max-[620px]:px-6 max-[620px]:py-[72px]">
        <div className="flex items-end gap-10 max-[1000px]:flex-col max-[1000px]:items-start max-[1000px]:gap-8">
          <h1 data-reveal="heading" className="flex-1 text-[clamp(40px,4.6vw,64px)] font-medium leading-[1.12] tracking-[-1px] text-ink">Industrial Power You Can Count On —<br />Customised to Your Site.</h1>
          <div className="flex w-[493px] max-w-full shrink-0 flex-col gap-10">
            <p className="text-base leading-6 tracking-[-0.32px] text-grey">Battery energy storage engineered for factories, processing plants, and data centres across Bangladesh. Cut energy costs, eliminate downtime, and meet the decarbonisation standards your buyers expect.</p>
            <a href="#contact" className={`${btnDark} self-start`}>Discuss Your Energy Goals</a>
          </div>
        </div>
        <div className="h-[730px] w-full overflow-hidden rounded-2xl max-[620px]:h-[420px]"><img src="/assets/image/ci-hero.jpg" alt="Industrial power facility reflected in water" className="h-full w-full object-cover" /></div>
      </section>

      {/* Built for Industry */}
      <div className="px-10 pb-10 max-[620px]:px-6">
        <div className="mx-auto flex max-w-site items-start gap-0 rounded-md bg-sand px-10 py-[120px] max-[1000px]:flex-col max-[1000px]:gap-8 max-[620px]:px-6">
          <div className="flex w-[300px] shrink-0 items-center gap-3 font-mono text-sm uppercase leading-4 text-grey max-[1000px]:w-auto"><span className="hex bg-primary" aria-hidden="true" />Built for Industry</div>
          <div className="flex min-w-0 flex-1 flex-col gap-10">
            <p className="text-[clamp(28px,3.6vw,48px)] font-medium leading-[1.17] tracking-[-1px] text-ink">Every operation runs differently — so every system we build is different. We deliver containerised and cabinet BESS from 100 kWh to multiple MWh, configured to match your exact load profile, duty cycle, and site conditions. The result is power that fits how your plant actually runs, not a one-size-fits-all box.</p>
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
      </div>

      {/* Purpose-Built sectors */}
      <section className="mx-auto flex max-w-site flex-col gap-12 px-10 py-16 max-[620px]:px-6">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-3 font-mono text-sm uppercase leading-4 text-grey"><span className="hex bg-primary" aria-hidden="true" />Purpose to build</div>
          <div className="flex flex-col gap-4">
            <h2 data-reveal="heading" className="text-[clamp(38px,4.4vw,56px)] font-medium leading-[1.14] tracking-[-1px] text-ink">Purpose-Built for Your Sector</h2>
            <p className="text-lg font-medium leading-6 text-ink">From export-oriented manufacturing to temperature-critical storage, we understand the loads and stakes specific to your industry.</p>
          </div>
        </div>
        <div data-stagger className="grid grid-cols-3 gap-10 max-[1000px]:grid-cols-2 max-[620px]:grid-cols-1">
          {SECTORS.map(([img, label]) => (
            <div key={label} className="relative flex h-[510px] items-end overflow-hidden rounded-2xl px-5 py-10">
              <img src={img} alt={label} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <span className="relative z-[1] text-[32px] font-medium leading-10 tracking-[-1px] text-stroke">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Three Reasons */}
      <section className="mx-auto flex max-w-site flex-col gap-10 px-10 py-16 max-[620px]:px-6">
        <div className="flex items-end justify-between gap-10 max-[1000px]:flex-col max-[1000px]:items-start max-[1000px]:gap-8">
          <h2 data-reveal="heading" className="max-w-[800px] text-[clamp(40px,4.4vw,56px)] font-medium leading-[1.14] tracking-[-1px] text-ink">Three Reasons Industry<br />Chooses Storage</h2>
          <p className="w-[440px] max-w-full text-lg font-medium leading-6 text-grey">Backup power, lower bills, and cleaner production — the outcomes that matter to industrial operators.</p>
        </div>
        <div data-stagger className="flex h-[648px] overflow-hidden rounded-2xl max-[1000px]:h-auto max-[1000px]:flex-col">
          {REASONS.map(([img, t, d]) => (
            <div key={t} data-parallax-trigger className="relative min-w-0 flex-1 overflow-hidden max-[1000px]:h-[420px]">
              <img data-parallax="img" src={img} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 opacity-70" />
              <div className="absolute inset-0 z-[1] flex flex-col justify-end gap-4 p-8">
                <h3 className="text-[32px] font-medium leading-10 tracking-[-1px] text-white">{t}</h3>
                <p className="text-base leading-6 text-white">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How Industry Puts Storage to Work */}
      <section className="bg-ink py-32 text-white max-[620px]:py-[72px]">
        <div className="mx-auto flex max-w-site flex-col gap-10 px-10 max-[620px]:px-6">
          <h2 data-reveal="heading" className="text-[clamp(40px,4.4vw,56px)] font-medium leading-[1.14] tracking-[-1px] text-white">How Industry Puts<br />Storage to Work</h2>
          <div data-stagger className="flex gap-5 max-[1000px]:flex-wrap">
            {WORK.map(([icon, t, d]) => (
              <div key={t} className="flex h-[400px] flex-1 flex-col justify-between overflow-hidden rounded-2xl bg-coal p-8 max-[1000px]:h-auto max-[1000px]:min-h-[320px] max-[1000px]:flex-[1_1_100%]">
                <div className="h-[50px] w-[60px]"><img src={icon} alt="" className="h-full w-full object-contain" /></div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-[32px] font-medium leading-10 tracking-[-1px] text-white">{t}</h3>
                  <p className="text-base leading-6 text-stroke">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedCases cases={CASES} />

      {/* Export Edge */}
      <section className="px-10 py-16 max-[620px]:px-6">
        <div className="mx-auto flex max-w-site items-start gap-0 max-[1000px]:flex-col max-[1000px]:gap-8">
          <div className="flex w-[300px] shrink-0 items-center gap-3 font-mono text-sm uppercase leading-[21px] tracking-[-0.28px] text-ink max-[1000px]:w-auto"><span className="hex bg-primary" aria-hidden="true" />Investors and Partners</div>
          <div className="flex min-w-0 flex-1 flex-col items-start gap-10">
            <h2 data-reveal="heading" className="text-[clamp(40px,4.4vw,56px)] font-medium leading-[1.14] tracking-[-1px] text-ink">Power That Protects Your Export Edge</h2>
            <p className="max-w-[840px] text-lg font-medium leading-6 text-grey">International buyers are raising the bar on sustainability — demanding proof of cleaner production, not just promises. By integrating renewable energy and cutting diesel reliance, our storage systems help you generate the decarbonisation evidence that keeps you compliant, competitive, and first in line for global orders.</p>
            <a href="#contact" className={btnDark}>Talk to Our Team</a>
          </div>
        </div>
      </section>

      <Standards />

      <MidCta
        image="/assets/image/midcta-diesel.png"
        title="Bangladesh Deserves Better Than Diesel."
        body="Power unreliability costs Bangladeshi industry billions every year — in wasted fuel, lost production, and missed export windows. We founded AKS Hithium Energy to change that: bringing the same Tier-1 technology that stabilises grids globally to the factories of Bangladesh."
      />

      <Footer />
    </>
  );
}
