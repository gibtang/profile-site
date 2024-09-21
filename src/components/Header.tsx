'use client';

// /

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
      <div className="flex items-center gap-4 text-[#111418]">
        <div className="size-4">
          {/* SVG logo */}
        </div>
        <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">CTO as a Service</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <a onClick={() => scrollToSection('about')} className="text-[#111418] text-sm font-medium leading-normal cursor-pointer">About</a>
          <a onClick={() => scrollToSection('services')} className="text-[#111418] text-sm font-medium leading-normal cursor-pointer">Services</a>
          {/* <a onClick={() => scrollToSection('case-studies')} className="text-[#111418] text-sm font-medium leading-normal cursor-pointer">Case Studies</a>
          <a onClick={() => scrollToSection('testimonials')} className="text-[#111418] text-sm font-medium leading-normal cursor-pointer">Testimonials</a> */}
        </nav>
        <a
          href="mailto:gibtang@gmail.com?subject=Fractional%20CTO%20enquiry"
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1568c1] text-white text-sm font-bold leading-normal tracking-[0.015em] no-underline"
        >
          <span className="truncate">Contact</span>
        </a>
      </div>
    </header>
  );
}