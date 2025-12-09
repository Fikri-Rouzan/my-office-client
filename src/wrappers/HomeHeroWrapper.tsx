export default function HomeHeroWrapper() {
  return (
    <header className="flex flex-col w-full relative overflow-hidden">
      <section
        id="Hero-Banner"
        className="relative flex flex-col lg:block w-full lg:h-[720px] lg:-mb-[93px]"
      >
        <div
          id="Hero-Image"
          className="absolute top-0 right-0 w-full h-[400px] lg:w-[calc(100%-((100%-1130px)/2)-305px)] lg:h-[720px] overflow-hidden z-0"
        >
          <img
            src="/assets/images/backgrounds/banner.png"
            className="w-full h-full object-cover object-center"
            alt="hero background"
          />
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-white/40 to-white"></div>
        </div>
        <div className="relative w-full max-w-[1130px] mx-auto px-4 lg:px-0 z-10 pt-[100px] lg:pt-[70px] mb-[50px] lg:mb-0">
          <div
            id="Hero-Text"
            className="flex flex-col w-full lg:max-w-[650px] h-fit rounded-[30px] border border-[#E0DEF7] p-6 lg:p-10 gap-[20px] lg:gap-[30px] bg-white shadow-lg lg:shadow-none"
          >
            <div className="flex items-center w-fit rounded-full py-2 px-4 gap-[10px] bg-[#000929]">
              <img
                src="/assets/images/icons/crown-white.svg"
                className="w-5 h-5"
                alt="icon"
              />
              <span className="font-semibold text-white text-sm lg:text-base">
                Top-Rated Productivity Platform
              </span>
            </div>

            <h1 className="font-extrabold text-[32px] lg:text-[50px] leading-[40px] lg:leading-[60px] text-[#000929]">
              Great Offices.
              <br />
              Limitless Growth.
            </h1>
            <p className="text-base lg:text-lg leading-7 lg:leading-8 text-[#000929]">
              Discover workspaces that elevate your work life. A healthier,
              better environment is the key to accelerating your career.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-5 w-full">
              <a
                href="#"
                className="flex items-center justify-center w-full sm:w-auto rounded-full p-[16px_20px] lg:p-[20px_26px] gap-3 bg-[#0D903A] hover:bg-[#0b7a31] transition"
              >
                <img
                  src="/assets/images/icons/slider-horizontal-white.svg"
                  className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]"
                  alt="icon"
                />
                <span className="font-bold text-lg lg:text-xl leading-[30px] text-[#F7F7FD]">
                  Explore Now
                </span>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-full sm:w-auto rounded-full border border-[#000929] p-[16px_20px] lg:p-[20px_26px] gap-3 bg-white hover:bg-gray-100 transition"
              >
                <img
                  src="/assets/images/icons/video-octagon.svg"
                  className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]"
                  alt="icon"
                />
                <span className="font-semibold text-lg lg:text-xl leading-[30px]">
                  Watch Video
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col pt-10 lg:pt-[150px] pb-10 px-4 lg:px-[120px] gap-10 bg-[#0D903A]">
        <div className="logo-container flex items-center justify-center flex-wrap max-w-[1130px] mx-auto gap-8 lg:gap-[60px] opacity-80 lg:opacity-100">
          <img
            src="/assets/images/logos/tesla.svg"
            className="h-6 lg:h-auto"
            alt="clients logo"
          />
          <img
            src="/assets/images/logos/libra.svg"
            className="h-6 lg:h-auto"
            alt="clients logo"
          />
          <img
            src="/assets/images/logos/binance.svg"
            className="h-6 lg:h-auto"
            alt="clients logo"
          />
          <img
            src="/assets/images/logos/facebook.svg"
            className="h-6 lg:h-auto"
            alt="clients logo"
          />
          <img
            src="/assets/images/logos/microsoft.svg"
            className="h-6 lg:h-auto"
            alt="clients logo"
          />
        </div>
        <div className="grid grid-cols-2 lg:flex lg:justify-center gap-8 lg:gap-[50px]">
          <div className="flex flex-col gap-[2px] text-center">
            <p className="text-sm lg:text-xl leading-[30px] text-[#F7F7FD]">
              Comfortable Spaces
            </p>
            <p className="font-bold text-[28px] lg:text-[38px] leading-[40px] lg:leading-[57px] text-white">
              580M+
            </p>
          </div>
          <div className="flex flex-col gap-[2px] text-center">
            <p className="text-sm lg:text-xl leading-[30px] text-[#F7F7FD]">
              Startups Succeed
            </p>
            <p className="font-bold text-[28px] lg:text-[38px] leading-[40px] lg:leading-[57px] text-white">
              98%
            </p>
          </div>
          <div className="flex flex-col gap-[2px] text-center">
            <p className="text-sm lg:text-xl leading-[30px] text-[#F7F7FD]">
              Global Locations
            </p>
            <p className="font-bold text-[28px] lg:text-[38px] leading-[40px] lg:leading-[57px] text-white">
              90+
            </p>
          </div>
          <div className="flex flex-col gap-[2px] text-center">
            <p className="text-sm lg:text-xl leading-[30px] text-[#F7F7FD]">
              Events Hosted
            </p>
            <p className="font-bold text-[28px] lg:text-[38px] leading-[40px] lg:leading-[57px] text-white">
              139M+
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
