export default function CaseStudies() {
    return (
      <section>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Case Studies</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {/* Repeat this block for each case study */}
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{backgroundImage: 'url("/images/icon1.png")'}}
            ></div>
            <div>
              <p className="text-[#111418] text-base font-medium leading-normal">Fintech Startup</p>
              <p className="text-[#637588] text-sm font-normal leading-normal">$15M Series A, 50 engineers, 5x growth in 2 years</p>
            </div>
          </div>
          {/* ... Other case studies ... */}
        </div>
      </section>
    );
  }