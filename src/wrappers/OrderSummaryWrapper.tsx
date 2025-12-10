import { Office } from "../types/type";

interface OrderSummaryWrapperProps {
  office: Office;
  uniqueCode: number;
  totalAmount: number;
  isLoading: boolean;
}

export default function OrderSummaryWrapper({
  office,
  uniqueCode,
  totalAmount,
  isLoading,
}: OrderSummaryWrapperProps) {
  return (
    <div className="flex flex-col shrink-0 w-full lg:w-[400px] h-fit rounded-[20px] border border-[#E0DEF7] p-[20px] lg:p-[30px] gap-[30px] bg-white shadow-sm lg:shadow-none">
      <h2 className="font-bold text-lg">Order Summary</h2>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <p className="font-semibold">Duration</p>
          <p className="font-bold">{office.duration} Workdays Access</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold">Subtotal</p>
          <p className="font-bold">Rp {office.price.toLocaleString("id")}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold">Unique Code</p>
          <p className="font-bold text-[#FF852D]">+Rp {uniqueCode}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold">Total Amount</p>
          <p className="font-bold text-[22px] leading-[33px] text-[#0D903A]">
            Rp{" "}
            {totalAmount.toLocaleString("id", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </p>
        </div>
        <div className="relative rounded-xl p-[10px_20px] gap-[10px] bg-[#000929] text-white">
          <img
            src="/assets/images/icons/polygon.svg"
            className="absolute -top-[15px] right-[10px]"
            alt=""
          />
          <p className="font-semibold text-sm leading-[24px] z-10">
            Please ensure you transfer the exact total amount (up to the last 3
            digits).
          </p>
        </div>
      </div>

      <hr className="border-[#F6F5FD]" />

      <h2 className="font-bold text-lg">Transfer To</h2>
      <div className="flex flex-col gap-[30px]">
        <div className="flex items-center gap-3">
          <div className="w-[71px] flex shrink-0">
            <img
              src="/assets/images/logos/bca.svg"
              className="w-full object-contain"
              alt="bank logo"
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <div className="flex items-center gap-1">
              <p className="font-semibold">My Office</p>
              <img
                src="/assets/images/icons/verify.svg"
                className="w-[18px] h-[18px]"
                alt="icon"
              />
            </div>
            <p>123456789</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[71px] flex shrink-0">
            <img
              src="/assets/images/logos/mandiri.svg"
              className="w-full object-contain"
              alt="bank logo"
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <div className="flex items-center gap-1">
              <p className="font-semibold">My Office</p>
              <img
                src="/assets/images/icons/verify.svg"
                className="w-[18px] h-[18px]"
                alt="icon"
              />
            </div>
            <p>123456789</p>
          </div>
        </div>
      </div>

      <hr className="border-[#F6F5FD]" />

      <button
        type="submit"
        disabled={isLoading}
        className="flex items-center justify-center w-full rounded-full p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD] hover:bg-[#0b7a31] transition disabled:opacity-50"
      >
        <span>{isLoading ? "Loading..." : "Confirm Payment"}</span>
      </button>
    </div>
  );
}
