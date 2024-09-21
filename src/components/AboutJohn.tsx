export default function AboutJohn() {
    return (
      <section>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About John</h2>
        <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
          John is a boutique consulting firm that provides high-touch advisory and execution services to startups. Our team is made up of ex-CTOs, VPEs, and Tech Leads from top
          tech companies like Google, Facebook, and Amazon. We've helped over 100 startups scale their technology and teams, and our clients have raised over $1B in funding.
          Whether you're a seed-stage startup or a late-stage unicorn, we can help you accelerate your growth and build a world-class engineering organization.
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {/* Repeat this block for each image */}
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{backgroundImage: 'url("/images/main.png")'}}
            ></div>
          </div>
          {/* ... Other images ... */}
        </div>
      </section>
    );
  }