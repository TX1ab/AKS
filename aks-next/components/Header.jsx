import Link from 'next/link';

// variant: 'dark' (over hero, used on home) | 'light' (sticky white, sub-pages)
export default function Header({ variant = 'light' }) {
  const dark = variant === 'dark';
  const navItems = [
    { label: 'C&I Solutions', href: '/ci-solutions' },
    { label: 'Utility & Grid-Scale Solutions', href: '/utility-grid-scale' },
    { label: 'Technology', href: '/technology' },
    { label: 'About Us', href: '/about' },
  ];
  return (
    <header
      className={
        dark
          ? 'relative z-10 flex h-20 items-center border-b border-white/15'
          : 'sticky top-0 z-50 flex h-20 items-center border-b border-stroke bg-white'
      }
    >
      <div className="mx-auto flex w-full max-w-site items-center gap-5 px-10 max-[620px]:px-6">
        <Link href="/" aria-label="AKS Hithium home" className="block h-[30px] shrink-0">
          <img
            src={dark ? '/assets/image/aks-hithium-logo.svg' : '/assets/image/aks-logo-dark.svg'}
            alt="AKS Hithium"
            className="h-[30px] w-[142px]"
          />
        </Link>
        <nav className="flex flex-1 items-center justify-center gap-[25px] max-[1000px]:hidden" aria-label="Main">
          {navItems.map((it) => (
            <Link
              key={it.label}
              href={it.href}
              className={`text-base font-medium leading-6 tracking-[-0.32px] transition-opacity hover:opacity-60 ${
                dark ? 'text-white' : 'text-ink'
              }`}
            >
              {it.label}
            </Link>
          ))}
        </nav>
        <a
          href={dark ? '#' : '#contact'}
          className={`shrink-0 rounded-full px-5 py-2 text-base font-medium leading-6 tracking-[-0.32px] transition-colors ${
            dark ? 'bg-white text-ink hover:bg-[#ededed]' : 'bg-ink text-stroke hover:bg-[#333]'
          }`}
        >
          {dark ? 'Contact us' : 'Contact'}
        </a>
      </div>
    </header>
  );
}
