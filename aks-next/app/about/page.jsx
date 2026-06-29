import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Standards from '@/components/Standards';
import MidCta from '@/components/MidCta';
import Faq from '@/components/Faq';
import Anim from '@/components/Anim';

export const metadata = {
  title: 'About — AKS Hithium',
  description: 'AKS Hithium Energy brings global Tier-1 battery storage to Bangladesh — pairing world-class technology with local commitment.',
};

const HERO_IMGS = ['/assets/image/about-hero-1.png', '/assets/image/about-hero-2.png', '/assets/image/about-hero-3.png'];
const STATS = [
  ['150 GWh+', 'Global Hithium deployments'],
  ['Tier-1', 'BloombergNEF-ranked manufacturer'],
  ['11,000+', 'Charge cycles per LFP system'],
  ['24/7', 'Dhaka-based monitoring and support'],
];
const MFG_POINTS = [
  ['Faster Delivery, Lower Cost', 'Reduced logistics time and expense vs. fully imported systems'],
  ['Full Quality Control', "Built to Hithium's global manufacturing protocols"],
  ['Local Employment', 'Skills and capability that stay in the country'],
  ['National Vision', "A manufacturing base supporting 'Build in Bangladesh' goals"],
];
const TEAM = Array.from({ length: 8 }, (_, i) => [`/assets/image/team-${i + 1}.png`, 'Robart Johnson', 'Head / Marketing']);
const PROCESS = [
  ['/assets/image/cap-activity.svg', '1', 'Engineer & Assess', 'We study your load profile, duty cycle, and site conditions to size the exact system.'],
  ['/assets/image/asm-truck.svg', '2', 'Supply & Install', 'Tier-1 cells delivered and installed, with full integration into your power infrastructure.'],
  ['/assets/image/asm-check.svg', '3', 'Commission', 'Factory-tested systems brought online with rigorous on-site validation before handover.'],
  ['/assets/image/asm-users.svg', '4', 'Long-Term Support', '24/7 monitoring, rapid field response, and warranty management from our Dhaka team.'],
];
const FAQ = [
  { q: 'What size systems do you offer?', a: 'From 100 kWh commercial cabinets to multi-MWh containerised and grid-scale installations — each sized to your specific load and duty cycle.' },
  { q: 'Who manufactures your batteries?', a: 'Every system uses LFP cells from Hithium, a BloombergNEF Tier-1 manufacturer with over 150 GWh deployed worldwide.' },
  { q: 'Why LFP instead of other chemistries?', a: 'LFP is inherently safe with no thermal runaway propagation, offers 11,000+ cycles, runs cobalt-free, and delivers high round-trip efficiency.' },
  { q: 'Do you provide installation and ongoing support?', a: 'Yes — we handle the full lifecycle: engineering, supply, commissioning, and 24/7 after-sales support from our Dhaka-based team.' },
  { q: 'What does "Built in Bangladesh" mean for me?', a: 'From 2027, local assembly means faster delivery, locally stocked spare parts, and a sovereign support capability rather than reliance on overseas logistics.' },
  { q: 'Can you support tender and EPC requirements?', a: 'Yes — we offer competitive tender participation with full EPC and financing support, backed by performance guarantees from Hithium.' },
];

const pill = 'inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-medium leading-6 transition-colors';

export default function About() {
  return (
    <>
      <Anim />
      <Header variant="light" />

      {/* Hero */}
      <section className="mx-auto flex max-w-site flex-col gap-16 px-10 pt-32 max-[620px]:px-6 max-[620px]:pt-[72px]">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-3 font-mono text-sm uppercase leading-4 text-grey"><span className="hex bg-primary" aria-hidden="true" />About AKS x Hithium</div>
            <h1 className="max-w-[882px] text-center text-[clamp(40px,4.6vw,64px)] font-medium leading-[1.12] tracking-[-1px] text-ink">Nation-Building Energy Storage. Secure Power.</h1>
          </div>
          <div className="flex flex-col items-center gap-5">
            <p className="max-w-[868px] text-center text-lg font-medium leading-6 text-[#9ca3af]">AKS Hithium Energy brings global Tier-1 battery storage to Bangladesh — pairing world-class technology with local commitment. We make power reliable for industry, manufacturing, and the national grid, so growth never has to wait for the next outage.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className={`${pill} bg-ink text-stroke hover:bg-[#333]`}>Discuss Your Energy Goals</a>
              <a href="/ci-solutions" className={`${pill} border border-grey bg-transparent text-grey hover:bg-grey hover:text-white`}>Explore Our Solutions</a>
            </div>
          </div>
        </div>
        <div className="flex gap-5 max-[760px]:flex-col">
          {HERO_IMGS.map((src, i) => (
            <div key={i} className="h-[440px] min-w-0 flex-1 overflow-hidden rounded-2xl"><img src={src} alt="" className="h-full w-full object-cover" /></div>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <div className="mx-auto flex max-w-site flex-wrap items-start justify-between gap-8 px-10 py-12 max-[620px]:px-6">
        {STATS.map(([n, d]) => (
          <div key={d} className="flex w-[300px] max-w-full flex-col items-center gap-2 text-center max-[620px]:w-[45%]">
            <p className="text-[32px] font-medium leading-10 tracking-[-1px] text-ink">{n}</p>
            <p className="text-base leading-6 text-grey">{d}</p>
          </div>
        ))}
      </div>

      {/* Mission quote */}
      <section className="flex justify-center bg-sand px-20 py-40 max-[620px]:px-6 max-[620px]:py-24">
        <p className="max-w-[942px] text-center text-[clamp(32px,4.2vw,56px)] font-medium leading-[1.14] tracking-[-1px] text-ink">&ldquo;Building a sovereign, reliable energy storage industry for Bangladesh — one that powers national growth and earns global trust.&rdquo;</p>
      </section>

      {/* Manufacturing */}
      <section className="bg-white px-10 pb-32 pt-16 max-[620px]:px-6">
        <div className="mx-auto flex max-w-site items-start gap-20 max-[1000px]:flex-col max-[1000px]:gap-10">
          <div className="flex flex-1 flex-col gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 font-mono text-sm uppercase leading-4 text-grey"><span className="hex bg-primary" aria-hidden="true" />Manufacturing</div>
              <h2 className="text-[clamp(40px,4.4vw,56px)] font-medium leading-[1.14] tracking-[-1px] text-ink">Assembled in Bangladesh, from 2027</h2>
              <p className="text-lg font-medium leading-6 text-grey">We operate under an exclusive venture with Hithium to establish Bangladesh&apos;s first dedicated BESS assembly line — creating sovereign manufacturing capability and local jobs.</p>
            </div>
            <div className="flex flex-col gap-8">
              {MFG_POINTS.map(([t, d]) => (
                <div key={t} className="flex items-start gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-xl bg-primary"><img src="/assets/image/check-white.svg" alt="" className="h-3.5 w-3.5" /></span>
                  <div className="flex flex-col gap-1 text-base leading-6">
                    <p className="text-ink">{t}</p>
                    <p className="text-grey">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-[622px] min-w-0 flex-1 overflow-hidden rounded-2xl"><img src="/assets/image/about-mfg.png" alt="BESS assembly" className="h-full w-full object-cover" /></div>
        </div>
      </section>

      {/* Partnership */}
      <section className="bg-white px-10 py-16 max-[620px]:px-6">
        <div className="mx-auto flex max-w-site flex-col gap-16">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-3 font-mono text-sm uppercase leading-4 text-grey"><span className="hex bg-primary" aria-hidden="true" />Joint Venture</div>
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-[clamp(36px,4vw,56px)] font-medium leading-[1.14] tracking-[-1px] text-ink">A Joint Venture Built on Strength</h2>
              <p className="text-lg font-medium leading-6 text-grey">Local roots meet global technology leadership.</p>
            </div>
          </div>
          <div className="flex items-stretch gap-6 max-[900px]:flex-col">
            <div className="flex flex-1 flex-col justify-end gap-10 rounded-2xl border border-stroke p-10">
              <p className="font-mono text-sm uppercase leading-4 text-ink">Local Partner</p>
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-[32px] font-medium leading-10 tracking-[-1px] text-ink">AKS Khan Holdings</p>
                  <p className="mt-2 text-base leading-6 text-grey">A respected Bangladeshi conglomerate with deep local roots, diversified expertise, and an unwavering commitment to the country&apos;s industrial future. AKS brings the relationships, regulatory knowledge, and operational infrastructure to build something lasting.</p>
                </div>
                <img src="/assets/image/partner-aks.png" alt="AKS Khan Holdings" className="h-10 w-auto max-w-[140px] object-contain" />
              </div>
            </div>
            <div className="flex w-[668px] max-w-full shrink-0 flex-col justify-end gap-10 rounded-2xl border border-stroke p-10 max-[900px]:w-full">
              <p className="font-mono text-sm uppercase leading-4 text-ink">Global Partner</p>
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-[32px] font-medium leading-10 tracking-[-1px] text-ink">Hithium</p>
                  <p className="mt-2 text-base leading-6 text-grey">A top-five global BESS manufacturer with proprietary R&amp;D, cell-to-system production, and deployments across five continents. BloombergNEF Tier-1 ranked, Hithium brings technology proven by the world&apos;s largest projects.</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  {['150 GWh+ deployed', '5 continents', 'BloombergNEF Tier-1'].map((s) => (
                    <span key={s} className="rounded bg-sand px-3 py-1.5 text-base leading-6 text-ink">{s}</span>
                  ))}
                </div>
                <img src="/assets/image/partner-hithium.png" alt="Hithium" className="h-7 w-auto max-w-[120px] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white px-10 py-16 max-[620px]:px-6">
        <div className="mx-auto flex max-w-site flex-col items-center gap-10">
          <h2 className="w-full text-[clamp(40px,4.4vw,56px)] font-medium leading-[1.14] tracking-[-1px] text-ink">Our Team</h2>
          <div className="grid w-full grid-cols-4 gap-4 max-[1000px]:grid-cols-2 max-[560px]:grid-cols-1">
            {TEAM.map(([img, name, role], i) => (
              <div key={i} className="flex flex-col">
                <div className="h-[335px] overflow-hidden rounded-t-2xl"><img src={img} alt={name} className="h-full w-full object-cover" /></div>
                <div className="flex flex-col gap-2 rounded-b-2xl border border-stroke p-4">
                  <p className="text-xl leading-7 text-ink">{name}</p>
                  <p className="text-base leading-6 text-grey">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white px-10 py-32 max-[620px]:px-6 max-[620px]:py-20">
        <div className="mx-auto flex max-w-site flex-col gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 font-mono text-sm uppercase leading-4 text-grey"><span className="hex bg-primary" aria-hidden="true" />Our Process</div>
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(40px,4.4vw,56px)] font-medium leading-[1.14] tracking-[-1px] text-ink">A Clear Path from Challenge to Capacity</h2>
              <p className="text-lg font-medium leading-6 text-grey">One accountable partner across the entire lifecycle.</p>
            </div>
          </div>
          <div className="flex gap-6 max-[1000px]:flex-wrap">
            {PROCESS.map(([icon, num, t, d]) => (
              <div key={num} className="relative flex flex-1 flex-col gap-6 overflow-hidden rounded-2xl bg-sand p-4 max-[1000px]:flex-[1_1_45%] max-[560px]:flex-[1_1_100%]">
                <span aria-hidden="true" className="pointer-events-none absolute -top-4 right-2 font-medium leading-none text-black/5 text-[160px]">{num}</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg"><img src={icon} alt="" className="h-6 w-6" /></div>
                <div className="flex flex-col gap-3">
                  <p className="text-2xl font-medium leading-8 tracking-[-1px] text-ink">{t}</p>
                  <p className="text-base leading-6 text-grey">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Standards />

      <Faq title="Frequently Asked Questions" items={FAQ} variant="home" />

      <MidCta
        image="/assets/image/midcta-about.png"
        title="Bangladesh Deserves Better Than Diesel."
        body="Power unreliability costs Bangladeshi industry billions every year — in wasted fuel, lost production, and missed export windows. We founded AKS Hithium Energy to change that: bringing the same Tier-1 technology that stabilises grids globally to the factories of Bangladesh."
      />

      <Footer />
    </>
  );
}
