export default function Testimonials() {
    return (
      <section>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Testimonials</h2>
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-8">
            {/* Repeat this block for each testimonial */}
            <div className="flex h-full flex-1 flex-col gap-4 text-center rounded-lg min-w-32 pt-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex flex-col self-center w-full"
                style={{backgroundImage: 'url("https://cdn.usegalileo.ai/stability/78e0e6fa-54cb-436f-b820-3421adb39956.png")'}}
              ></div>
              <p className="text-[#111418] text-base font-medium leading-normal">
                &quot;CTO as a Service is a real gem and is the site of choice for people with high ambitions. We&apos;re meeting people we couldn&apos;t have found otherwise, the type of
                people that don&apos;t usually apply for roles. My favorite part is that we can highlight our team culture in a way impossible elsewhere. Just having job
                descriptions is antiquated and read.cv fixed that.&quot; - Dennis Mueller
              </p>
            </div>
            {/* ... Other testimonials ... */}
          </div>
        </div>
      </section>
    );
  }