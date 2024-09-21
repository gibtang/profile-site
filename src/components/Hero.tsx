export default function Hero() {
    return (
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
            style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/images/main.png")'}}
          >
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                CTO as a Service
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                A fractional CTO service for ambitious startups
              </h2>
            </div>
            <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                {/* Email input and button */}
              </div>
            </label>
          </div>
        </div>
      </div>
    );
  }
  