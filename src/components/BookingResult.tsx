import { BookingDetails } from "../types/type";

interface BookingResultProps {
  bookingDetails: BookingDetails;
}

export default function BookingResult({ bookingDetails }: BookingResultProps) {
  const baseURL = import.meta.env.VITE_REACT_STORAGE_URL;

  return (
    <div
      id="Result"
      className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] animate-fade-in"
    >
      <div className="flex flex-col h-fit shrink-0 rounded-[20px] border border-[#E0DEF7] p-[20px] lg:p-[30px] gap-[30px] bg-white shadow-sm">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex shrink-0 w-full sm:w-[140px] h-[180px] sm:h-[100px] rounded-[20px] overflow-hidden">
            <img
              src={`${baseURL}/${bookingDetails.office.thumbnail}`}
              className="w-full h-full object-cover"
              alt="thumbnail"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl leading-[30px]">
              {bookingDetails.office.name}
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-[6px]">
              <img
                src="/assets/images/icons/location.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <p className="font-semibold">{bookingDetails.office.city.name}</p>
            </div>
          </div>
        </div>

        <hr className="border-[#F6F5FD]" />

        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-lg">Customer Details</h2>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm text-gray-500">Full Name</h3>
            <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
              <img
                src="/assets/images/icons/security-user-black.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <p className="font-semibold text-sm lg:text-base">
                {bookingDetails.name}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm text-gray-500">
              Phone Number
            </h3>
            <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
              <img
                src="/assets/images/icons/call-black.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <p className="font-semibold text-sm lg:text-base">
                {bookingDetails.phone_number}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-sm text-gray-500">Check-in</h3>
              <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
                <img
                  src="/assets/images/icons/calendar-black.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <p className="font-semibold text-sm lg:text-base whitespace-nowrap">
                  {bookingDetails.started_at}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-sm text-gray-500">Check-out</h3>
              <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
                <img
                  src="/assets/images/icons/calendar-black.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <p className="font-semibold text-sm lg:text-base whitespace-nowrap">
                  {bookingDetails.ended_at}
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-[#F6F5FD]" />

        <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl border border-green-100">
          <img
            src="/assets/images/icons/shield-tick.svg"
            className="w-[30px] h-[30px]"
            alt="icon"
          />
          <p className="font-semibold leading-[24px] text-sm text-green-800">
            Your data is secure.
          </p>
        </div>
      </div>
      <div className="flex flex-col h-fit shrink-0 rounded-[20px] border border-[#E0DEF7] p-[20px] lg:p-[30px] gap-[30px] bg-white shadow-sm">
        <h2 className="font-bold text-lg">Order Details</h2>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <p className="font-semibold">Payment Status</p>
            <p
              className={`rounded-full w-fit p-[6px_16px] font-bold text-sm leading-[21px] text-[#F7F7FD] ${
                bookingDetails.is_paid ? "bg-[#0D903A]" : "bg-[#FF852D]"
              }`}
            >
              {bookingDetails.is_paid ? "SUCCESS" : "PENDING"}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Booking ID</p>
            <p className="font-bold text-sm sm:text-base">
              {bookingDetails.booking_trx_id}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Duration</p>
            <p className="font-bold text-sm sm:text-base">
              {bookingDetails.duration} Workdays Access
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Total Amount</p>
            <p className="font-bold text-lg sm:text-[22px] leading-[33px] text-[#0D903A]">
              Rp {bookingDetails.total_amount.toLocaleString("id")}
            </p>
          </div>
        </div>

        <hr className="border-[#F6F5FD]" />

        <h2 className="font-bold text-lg">Included Amenities</h2>
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/assets/images/icons/coffee.svg"
              className="w-[34px] h-[34px]"
              alt="icon"
            />
            <div className="flex flex-col gap-[2px]">
              <p className="font-bold text-sm sm:text-base">
                Complimentary Refreshments
              </p>
              <p className="text-xs sm:text-sm leading-[21px] text-gray-500">
                Stay energized and happy.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="/assets/images/icons/group.svg"
              className="w-[34px] h-[34px]"
              alt="icon"
            />
            <div className="flex flex-col gap-[2px]">
              <p className="font-bold text-sm sm:text-base">Flexible Access</p>
              <p className="text-xs sm:text-sm leading-[21px] text-gray-500">
                Open 24/7 for you.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-[#F6F5FD]" />

        <a
          href="#"
          className="flex items-center justify-center w-full rounded-full border border-[#000929] p-[12px_20px] gap-3 bg-white font-semibold hover:bg-gray-100 transition"
        >
          <img
            src="/assets/images/icons/call-black.svg"
            className="w-6 h-6"
            alt="icon"
          />
          <span>Contact Support</span>
        </a>
      </div>
    </div>
  );
}
