import { Office } from "../types/type";

interface OfficeCardProps {
  office: Office;
}

export default function OfficeCard({ office }: OfficeCardProps) {
  const baseURL = import.meta.env.VITE_REACT_STORAGE_URL;

  return (
    <div className="card w-full h-full">
      <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
        <div className="thumbnail-container relative w-full h-[200px]">
          <p className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD] z-10">
            Trending
          </p>
          <img
            src={`${baseURL}/${office.thumbnail}`}
            className="w-full h-full object-cover"
            alt={office.name}
          />
        </div>

        {/* Card Details */}
        <div className="card-detail-container flex flex-col p-4 lg:p-5 pb-[30px] gap-4 h-full justify-between">
          <div className="flex flex-col gap-4">
            <h3 className="line-clamp-2 font-bold text-lg lg:text-[22px] leading-[28px] lg:leading-[36px] min-h-[56px] lg:h-[72px]">
              {office.name}
            </h3>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-lg lg:text-xl leading-[30px] text-[#0D903A]">
                Rp {office.price.toLocaleString("id")}
              </p>
              <div className="flex items-center justify-end gap-[6px]">
                <p className="font-semibold text-sm lg:text-base">
                  {office.duration} days
                </p>
                <img
                  src="/assets/images/icons/clock.svg"
                  className="w-5 h-5 lg:w-6 lg:h-6"
                  alt="icon"
                />
              </div>
            </div>
          </div>

          <hr className="border-[#F6F5FD]" />

          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-[6px]">
              <img
                src="/assets/images/icons/location.svg"
                className="w-5 h-5 lg:w-6 lg:h-6"
                alt="icon"
              />
              <p className="font-semibold text-sm lg:text-base">
                {office.city.name}
              </p>
            </div>
            <div className="flex items-center justify-end gap-[6px]">
              <p className="font-semibold text-sm lg:text-base">5/5</p>
              <img
                src="/assets/images/icons/star.svg"
                className="w-5 h-5 lg:w-6 lg:h-6"
                alt="icon"
              />
            </div>
          </div>

          <hr className="border-[#F6F5FD]" />

          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-[6px]">
              <img
                src="/assets/images/icons/wifi.svg"
                className="w-5 h-5 lg:w-6 lg:h-6"
                alt="icon"
              />
              <p className="font-semibold text-sm lg:text-base">
                Fast Internet
              </p>
            </div>
            <div className="flex items-center justify-end gap-[6px]">
              <img
                src="/assets/images/icons/security-user.svg"
                className="w-5 h-5 lg:w-6 lg:h-6"
                alt="icon"
              />
              <p className="font-semibold text-sm lg:text-base">
                High Security
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
