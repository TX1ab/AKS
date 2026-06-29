'use client';
import { useState } from 'react';

// variant: 'home' (stroke border, grey question) | 'util' (lighter border, ink question, taller pad)
export default function Faq({ title, items, variant = 'home' }) {
  const [open, setOpen] = useState(-1);
  const util = variant === 'util';
  return (
    <section className="bg-white py-32 text-ink max-[700px]:py-20">
      <div className="mx-auto flex max-w-faq flex-col items-center gap-12 px-10 max-[620px]:px-6">
        <h2 className={`text-center font-medium tracking-[-1px] text-ink ${util ? 'text-[clamp(36px,4vw,56px)] leading-[1.14]' : 'text-[56px] leading-[64px]'}`}>
          {title}
        </h2>
        <div className="flex w-full max-w-[1136px] flex-col gap-5">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`overflow-hidden rounded-lg border bg-white ${util ? 'border-stroke-2' : 'border-stroke'}`}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className={`flex w-full items-center justify-between gap-6 text-left font-medium leading-6 text-grey ${util ? 'px-10 py-8 text-ink' : 'min-h-[110px] px-10 py-5'} text-lg max-[700px]:px-6`}
                >
                  <span className={util ? 'text-ink' : 'text-grey'}>{it.q}</span>
                  <span className="relative h-6 w-6 shrink-0" aria-hidden="true">
                    <span className="absolute left-0.5 top-[11px] h-0.5 w-5 bg-ink" />
                    <span className={`absolute left-[11px] top-0.5 h-5 w-0.5 bg-ink transition-transform duration-200 ${isOpen ? 'scale-y-0' : ''}`} />
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className={`max-w-[1000px] px-10 pb-6 text-base leading-6 text-grey max-[700px]:px-6 ${util ? 'pb-8' : ''}`}>{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
