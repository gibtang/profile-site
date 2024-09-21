import Link from 'next/link';

export default function Header() {
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
          <Link href="#" className="text-[#111418] text-sm font-medium leading-normal">About</Link>
          <Link href="#" className="text-[#111418] text-sm font-medium leading-normal">Services</Link>
          <Link href="#" className="text-[#111418] text-sm font-medium leading-normal">Case Studies</Link>
          <Link href="#" className="text-[#111418] text-sm font-medium leading-normal">Testimonials</Link>
        </nav>
        <a href="mailto:gibtang@gmail.com?subject=Fractional%20CTO%20enquiry" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1568c1] text-white text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Contact</span>
        </a>
      </div>
    </header>
  );
}