export default function Profile() {
    return (
      <div className="flex p-4 @container">
        <div className="flex w-full flex-col gap-4 items-center">
          <div className="flex gap-4 flex-col items-center">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
              style={{backgroundImage: 'url("/images/profile.png")'}}
            ></div>
            <div className="flex flex-col items-center justify-center justify-center">
              <p className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">John Smith</p>
              <p className="text-[#637588] text-base font-normal leading-normal text-center">Experienced in helping startups scale to the next level</p>
              <p className="text-[#637588] text-base font-normal leading-normal text-center">
                10+ years of experience, worked with top tech companies like Google, Facebook, and Amazon
              </p>
            </div>
          </div>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto">
            <span className="truncate">Contact Me at gibtang @ gmail.com</span>
          </button>
        </div>
      </div>
    );
  }