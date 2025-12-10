import { Link, useLocation } from "react-router";

export default function SuccessBooking() {
  const location = useLocation();
  const { office, booking } = location.state;

  const baseURL = import.meta.env.VITE_REACT_STORAGE_URL;

  return (
    <section className="flex flex-1 py-10 px-4">
      <div className="flex flex-col w-full max-w-[450px] m-auto rounded-[20px] border border-[#E0DEF7] p-[20px] lg:p-[30px] gap-[30px] bg-white shadow-sm">
        <div className="flex items-center gap-4">
          <img
            src="assets/images/icons/verify.svg"
            className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] flex shrink-0"
            alt="icon"
          />
          <h1 className="font-extrabold text-[22px] lg:text-[28px] leading-[32px] lg:leading-[38px]">
            You're All Set! 🙌
          </h1>
        </div>

        <hr className="border-[#F6F5FD]" />

        <div className="flex items-center gap-4">
          <div className="flex shrink-0 w-[120px] lg:w-[140px] h-[90px] lg:h-[100px] rounded-[20px] overflow-hidden">
            <img
              src={`${baseURL}/${office.thumbnail}`}
              className="w-full h-full object-cover"
              alt="thumbnail"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-lg lg:text-xl leading-[28px] lg:leading-[30px]">
              {office.name}
            </p>
            <div className="flex items-center gap-[6px]">
              <img
                src="assets/images/icons/location.svg"
                className="w-5 h-5 lg:w-6 lg:h-6"
                alt="icon"
              />
              <p className="font-semibold text-sm lg:text-base">
                {office.city.name}
              </p>
            </div>
          </div>
        </div>

        <hr className="border-[#F6F5FD]" />

        <div className="flex items-center gap-4">
          <img
            src="assets/images/icons/receipt-text.svg"
            className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px]"
            alt="icon"
          />
          <div>
            <p className="font-bold text-base lg:text-lg">
              {booking.booking_trx_id}
            </p>
            <p className="text-xs lg:text-sm leading-[21px] mt-[2px] text-gray-500">
              Keep your Booking ID handy.
            </p>
          </div>
        </div>

        <hr className="border-[#F6F5FD]" />

        <p className="font-semibold leading-[26px] lg:leading-[28px] text-center text-sm lg:text-base">
          We are processing your request. Look out for a notification via
          WhatsApp shortly.
        </p>
        <Link
          to={"/check-booking"}
          className="flex items-center justify-center w-full rounded-full p-[14px_20px] lg:p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD] hover:bg-[#0b7a31] transition"
        >
          <span>View Booking Details</span>
        </Link>
      </div>
    </section>
  );
}
