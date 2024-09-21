export default function WhyChooseJohn() {
    return (
      <div className="flex flex-col gap-10 px-4 py-10 @container">
        <div className="flex flex-col gap-4">
          <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
            Why Choose John?
          </h1>
          <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
            John's mission is to help startups grow faster and smarter with his expert advice, hands-on execution, and world-class network of engineers, designers, and growth
            marketers.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
          {/* Repeat this block for each reason */}
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
            <div className="text-[#111418]">
              {/* SVG icon */}
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">Built for Scale</h2>
              <p className="text-[#637588] text-sm font-normal leading-normal">John has helped companies reach 100m+ users and 10B+ valuation.</p>
            </div>
          </div>
          {/* ... Other reasons ... */}
        </div>
      </div>
    );
  }