import { Link } from "react-router";
import { Office } from "../types/type";

interface OfficeBookingWrapperProps {
  office: Office;
}

export default function OfficeBookingWrapper({
  office,
}: OfficeBookingWrapperProps) {
  return (
    <div className="w-full lg:w-[392px] flex flex-col shrink-0 gap-[30px]">
      {/* Booking Card */}
      <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[20px] lg:p-[30px] gap-[30px] bg-white shadow-sm lg:shadow-none">
        <div>
          <p className="font-extrabold text-[32px] leading-[48px] text-[#0D903A]">
            Rp {office.price.toLocaleString("id")}
          </p>
          <p className="font-semibold mt-1">
            {office.duration} Workdays Access
          </p>
        </div>
        <hr className="border-[#F6F5FD]" />
        <div className="flex flex-col gap-5">
          {office.benefits.map((benefit) => (
            <div key={benefit.id} className="flex items-center gap-3">
              <img
                src="/assets/images/icons/verify.svg"
                className="w-[30px] h-[30px]"
                alt="icon"
              />
              <p className="font-semibold leading-[28px]">{benefit.name}</p>
            </div>
          ))}
        </div>
        <hr className="border-[#F6F5FD]" />
        <div className="flex flex-col gap-[14px]">
          <Link
            to={`/office/${office.slug}/book`}
            className="flex items-center justify-center w-full rounded-full p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD] hover:bg-[#0b7a31] transition"
          >
            <img
              src="/assets/images/icons/slider-horizontal-white.svg"
              className="w-6 h-6"
              alt="icon"
            />
            <span>Book Workspace</span>
          </Link>
          <button className="flex items-center justify-center w-full rounded-full border border-[#000929] p-[16px_26px] gap-3 bg-white font-semibold hover:bg-gray-100 transition">
            <img
              src="/assets/images/icons/save-add.svg"
              className="w-6 h-6"
              alt="icon"
            />
            <span>Bookmark</span>
          </button>
        </div>
      </div>

      {/* Contact Sales Card */}
      <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[20px] lg:p-[30px] gap-[20px] bg-white shadow-sm lg:shadow-none">
        <h2 className="font-bold text-lg">Contact Sales</h2>
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden shrink-0">
                <img
                  src="/assets/images/photos/photo-1.png"
                  className="w-full h-full object-cover"
                  alt="photo"
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold">Lucas Weber</p>
                <p className="text-sm leading-[21px]">Sales Manager</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="#">
                <img
                  src="/assets/images/icons/call-green.svg"
                  className="w-10 h-10 hover:scale-105 transition"
                  alt="icon"
                />
              </a>
              <a href="#">
                <img
                  src="/assets/images/icons/chat-green.svg"
                  className="w-10 h-10 hover:scale-105 transition"
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden shrink-0">
                <img
                  src="/assets/images/photos/photo-2.png"
                  className="w-full h-full object-cover"
                  alt="photo"
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold">Hannah Fischer</p>
                <p className="text-sm leading-[21px]">Sales Manager</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="#">
                <img
                  src="/assets/images/icons/call-green.svg"
                  className="w-10 h-10 hover:scale-105 transition"
                  alt="icon"
                />
              </a>
              <a href="#">
                <img
                  src="/assets/images/icons/chat-green.svg"
                  className="w-10 h-10 hover:scale-105 transition"
                  alt="icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
