export default function HomeBenefitWrapper() {
  return (
    <section
      id="Benefits"
      className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[1015px] mx-auto gap-10 lg:gap-[100px] mt-10 lg:mt-[100px] px-4"
    >
      <h2 className="font-bold text-2xl lg:text-[32px] leading-8 lg:leading-[48px] text-center lg:text-left whitespace-normal lg:whitespace-nowrap shrink-0">
        Why We Are Great <br className="hidden lg:block" />
        For Your Business
      </h2>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-[30px] w-full">
        <div className="flex items-center gap-4 bg-white p-4 rounded-2xl lg:p-0 lg:bg-transparent lg:rounded-none border border-gray-100 lg:border-none shadow-sm lg:shadow-none">
          <div className="flex items-center justify-center shrink-0 w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-[23px] bg-white overflow-hidden border lg:border-none border-gray-100">
            <img
              src="/assets/images/icons/security-user.svg"
              className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]"
              alt="icon"
            />
          </div>
          <div className="flex flex-col gap-[2px] lg:gap-[5px]">
            <p className="font-bold text-lg leading-[27px]">
              Privacy-First Design
            </p>
            <p className="text-sm leading-[24px]">
              Ensures a distraction-free environment designed for focus and
              productivity.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-2xl lg:p-0 lg:bg-transparent lg:rounded-none border border-gray-100 lg:border-none shadow-sm lg:shadow-none">
          <div className="flex items-center justify-center shrink-0 w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-[23px] bg-white overflow-hidden border lg:border-none border-gray-100">
            <img
              src="/assets/images/icons/group.svg"
              className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]"
              alt="icon"
            />
          </div>
          <div className="flex flex-col gap-[2px] lg:gap-[5px]">
            <p className="font-bold text-lg leading-[27px]">
              Seamless Accessibility
            </p>
            <p className="text-sm leading-[24px]">
              Located strategically for effortless mobility and convenient
              access.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-2xl lg:p-0 lg:bg-transparent lg:rounded-none border border-gray-100 lg:border-none shadow-sm lg:shadow-none">
          <div className="flex items-center justify-center shrink-0 w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-[23px] bg-white overflow-hidden border lg:border-none border-gray-100">
            <img
              src="/assets/images/icons/3dcube.svg"
              className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]"
              alt="icon"
            />
          </div>
          <div className="flex flex-col gap-[2px] lg:gap-[5px]">
            <p className="font-bold text-lg leading-[27px]">
              Flexible Workspaces
            </p>
            <p className="text-sm leading-[24px]">
              Adaptable layouts tailored to meet your diverse business needs.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-2xl lg:p-0 lg:bg-transparent lg:rounded-none border border-gray-100 lg:border-none shadow-sm lg:shadow-none">
          <div className="flex items-center justify-center shrink-0 w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-[23px] bg-white overflow-hidden border lg:border-none border-gray-100">
            <img
              src="/assets/images/icons/cup.svg"
              className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]"
              alt="icon"
            />
          </div>
          <div className="flex flex-col gap-[2px] lg:gap-[5px]">
            <p className="font-bold text-lg leading-[27px]">
              Premium Facilities
            </p>
            <p className="text-sm leading-[24px]">
              High-quality office standards designed for maximum comfort and
              efficiency.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-2xl lg:p-0 lg:bg-transparent lg:rounded-none border border-gray-100 lg:border-none shadow-sm lg:shadow-none">
          <div className="flex items-center justify-center shrink-0 w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-[23px] bg-white overflow-hidden border lg:border-none border-gray-100">
            <img
              src="/assets/images/icons/coffee.svg"
              className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]"
              alt="icon"
            />
          </div>
          <div className="flex flex-col gap-[2px] lg:gap-[5px]">
            <p className="font-bold text-lg leading-[27px]">
              Complimentary Refreshments
            </p>
            <p className="text-sm leading-[24px]">
              Stay energized with free snacks and drinks to fuel your productive
              day.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-2xl lg:p-0 lg:bg-transparent lg:rounded-none border border-gray-100 lg:border-none shadow-sm lg:shadow-none">
          <div className="flex items-center justify-center shrink-0 w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-[23px] bg-white overflow-hidden border lg:border-none border-gray-100">
            <img
              src="/assets/images/icons/home-trend-up.svg"
              className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]"
              alt="icon"
            />
          </div>
          <div className="flex flex-col gap-[2px] lg:gap-[5px]">
            <p className="font-bold text-lg leading-[27px]">
              Sustainable Growth
            </p>
            <p className="text-sm leading-[24px]">
              Facilities designed to support your business's long-term success
              and stability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
