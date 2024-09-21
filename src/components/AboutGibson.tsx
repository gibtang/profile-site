export default function AboutGibson() {
    return (
      <section>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About Gibson</h2>
        <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
        Gibson Tang is a seasoned technology leader offering high-touch advisory and execution services to startups. With a background as a top level engineering executive in startups (from Series A to Unicorn status), Gibson brings a wealth of experience to the table. Whether you&apos;re a seed-stage startup or a series A startup, Gibson can help accelerate your growth and build a world-class engineering organization tailored to your unique needs.
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