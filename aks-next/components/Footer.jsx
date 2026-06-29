import Link from 'next/link';

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-5 w-5">
    <path d="M5 15L15 5M15 5H7M15 5V13" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-black pb-[72px] pt-[88px] text-white">
      <div className="pointer-events-none absolute inset-0 z-0">
        <img src="/assets/image/cta-footer-bg.png" alt="" className="h-full w-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-black from-[55%] to-transparent" />
      </div>
      <div className="relative z-[1] mx-auto flex max-w-site flex-col gap-[120px] px-10 max-[860px]:gap-[72px] max-[620px]:px-6">
        {/* CTA */}
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <h2 className="max-w-[560px] text-[clamp(36px,4.4vw,56px)] font-medium leading-[1.14] tracking-[-1px] text-white">
              Let&apos;s Power Your Next Chapter of Growth.
            </h2>
            <p className="max-w-[504px] text-lg leading-[27px] tracking-[-0.36px] text-white">
              Whether you&apos;re securing a factory or stabilising the grid, our team is ready to design the right storage solution.
            </p>
          </div>
          <a href="mailto:energy@aks-hithium.com" className="group inline-flex items-center gap-5 rounded-[50px] bg-white py-2 pl-5 pr-2 transition-transform hover:-translate-y-px">
            <span className="text-lg font-medium text-ink">Discuss Your Energy Goals</span>
            <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-primary transition-transform duration-200 group-hover:rotate-45">
              <ArrowIcon />
            </span>
          </a>
          <p className="text-lg leading-[27px] tracking-[-0.36px] text-white">Join us in powering a golden future.</p>
        </div>
        {/* Columns */}
        <div>
          <div className="h-px bg-grey" />
          <div className="mt-14 flex flex-wrap justify-between gap-14 max-[860px]:flex-col max-[860px]:gap-10">
            <div>
              <div className="mb-4 font-mono text-sm uppercase leading-[21px] text-muted-foot">Sitemap</div>
              <div className="flex gap-16 max-[860px]:gap-10">
                <div className="flex flex-col gap-1">
                  <FooterLink href="/">Home</FooterLink>
                  <FooterLink href="/about">About us</FooterLink>
                  <FooterLink href="/ci-solutions">C&amp;I Solutions</FooterLink>
                  <FooterLink href="/utility-grid-scale">Utility &amp; Grid-Scale</FooterLink>
                  <FooterLink href="/technology">Technology</FooterLink>
                </div>
                <div className="flex flex-col gap-1">
                  <FooterLink href="#">Term &amp; Service</FooterLink>
                  <FooterLink href="#">Privacy Policy</FooterLink>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-14 max-[860px]:flex-col max-[860px]:gap-8">
              <div className="flex flex-col gap-6">
                <Info label="Email & Support"><a href="mailto:energy@aks-hithium.com" className="text-white no-underline">energy@aks-hithium.com</a></Info>
                <Info label="Phone">+4 53589 432285</Info>
                <Info label="Address">Dhaka, Bangladesh</Info>
              </div>
              <div>
                <div className="mb-4 font-mono text-sm uppercase leading-[21px] text-muted-foot">Social</div>
                <div className="flex flex-col gap-1">
                  <FooterLink href="#">X/Twitter</FooterLink>
                  <FooterLink href="#">Youtube</FooterLink>
                  <FooterLink href="#">Linkedin</FooterLink>
                  <FooterLink href="#">Instagram</FooterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="flex flex-wrap justify-between gap-5">
          <p className="font-mono text-sm uppercase leading-[21px] tracking-[-0.28px] text-muted-foot">All right reserve @2025</p>
          <p className="font-mono text-sm uppercase leading-[21px] tracking-[-0.28px] text-muted-foot">Made by SELISE TXL</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link href={href} className="text-base font-medium leading-6 tracking-[-0.32px] text-white no-underline hover:text-muted-foot">
      {children}
    </Link>
  );
}
function Info({ label, children }) {
  return (
    <div>
      <div className="mb-4 font-mono text-sm uppercase leading-[21px] text-muted-foot">{label}</div>
      <div className="mt-2 text-base font-medium leading-6 tracking-[-0.32px] text-white">{children}</div>
    </div>
  );
}
