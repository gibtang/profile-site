export default function Services() {
    return (
      <section>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Services</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {/* Repeat this block for each service */}
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
            <div className="text-[#111418]">
              {/* SVG icon */}
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">Technology Strategy</h2>
              <p className="text-[#637588] text-sm font-normal leading-normal">Develop aligned tech strategy and roadmap for implementation, scaling, and growth support.</p>
            </div>
          </div>
          {/* ... Other services ... */}
          {/* Repeat this block for each service */}
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
            <div className="text-[#111418]">
              {/* SVG icon */}
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">Technical Due Diligence and Risk Assessment</h2>
              <p className="text-[#637588] text-sm font-normal leading-normal">Evaluate tech stack, identify risks, and provide actionable improvements, crucial for funding rounds or acquisitions.</p>
            </div>
          </div>
          {/* ... Other services ... */}
          {/* Repeat this block for each service */}
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
            <div className="text-[#111418]">
              {/* SVG icon */}
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">Team Building and Leadership</h2>
              <p className="text-[#637588] text-sm font-normal leading-normal">Build and lead high-performing tech teams, fostering innovation and aligning with company goals.</p>
            </div>
          </div>
          {/* ... Other services ... */}
        </div>
      </section>
    );
  }