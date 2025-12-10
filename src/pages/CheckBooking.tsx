import { useState } from "react";
import { z } from "zod";
import { BookingDetails } from "../types/type";
import { viewBookingSchema } from "../types/validationBooking";
import apiClient, { isAxiosError } from "../services/apiService";
import BookingResult from "../components/BookingResult";

export default function CheckBooking() {
  const [formData, setFormData] = useState({
    phone_number: "",
    booking_trx_id: "",
  });

  const [formErrors, setFormErrors] = useState<z.ZodIssue[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Validating form data...");

    const validation = viewBookingSchema.safeParse(formData);

    if (!validation.success) {
      console.error("Validation errors:", validation.error.issues);

      setFormErrors(validation.error.issues);

      return;
    }

    console.log("Form data is valid. Submitting...", formData);

    setIsLoading(true);
    setError(null);
    setBookingDetails(null);

    try {
      const response = await apiClient.post("/check-booking", {
        ...formData,
      });

      console.log("We are checking your booking", response.data.data);

      setBookingDetails(response.data.data);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        console.error("Error submitting form:", error.message);

        setError(error.message);
      } else {
        console.error("Unexpected error:", error);

        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        id="Banner"
        className="relative w-full h-[200px] lg:h-[240px] flex items-center shrink-0 overflow-hidden -mb-[50px]"
      >
        <h1 className="text-center mx-auto font-extrabold text-[28px] lg:text-[40px] leading-[40px] lg:leading-[60px] text-white mb-5 z-20 px-4">
          Check Booking Status
        </h1>
        <div className="absolute w-full h-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_91.83%)] z-10" />
        <img
          src="assets/images/thumbnails/thumbnail-details.png"
          className="absolute w-full h-full object-cover object-top"
          alt=""
        />
      </div>

      <section
        id="Check-Booking"
        className="relative flex flex-col w-full max-w-[930px] shrink-0 gap-[30px] mx-auto mb-[100px] z-20 px-4 lg:px-0"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row items-end rounded-[20px] border border-[#E0DEF7] p-[20px] lg:p-[30px] gap-[16px] bg-white shadow-sm"
        >
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="name" className="font-semibold">
              Booking ID
            </label>
            <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A]">
              <img
                src="assets/images/icons/receipt-text-black.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <input
                type="text"
                name="booking_trx_id"
                onChange={handleChange}
                value={formData.booking_trx_id}
                id="name"
                autoComplete="name"
                className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]"
                placeholder="Type your booking ID"
              />
            </div>

            {formErrors.find((error) =>
              error.path.includes("booking_trx_id")
            ) && (
              <p className="text-red-500 text-sm">Booking ID is required.</p>
            )}
          </div>

          <div className="flex flex-col w-full gap-2">
            <label htmlFor="phone" className="font-semibold">
              Phone Number
            </label>
            <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A]">
              <img
                src="assets/images/icons/call-black.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <input
                type="tel"
                name="phone_number"
                onChange={handleChange}
                value={formData.phone_number}
                id="phone"
                autoComplete="phone"
                className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]"
                placeholder="Type your phone number"
              />
            </div>

            {formErrors.find((error) =>
              error.path.includes("phone_number")
            ) && (
              <p className="text-red-500 text-sm">Phone Number is required.</p>
            )}
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="flex w-full lg:w-auto items-center justify-center rounded-full p-[12px_30px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD] hover:bg-[#0b7a31] transition"
          >
            <span className="text-nowrap">
              {isLoading ? "Loading..." : "Check Booking"}
            </span>
          </button>
        </form>

        {error && (
          <p className="text-center text-lg font-semibold mt-10 mb-10 text-red-500">
            {error}
          </p>
        )}

        {bookingDetails && <BookingResult bookingDetails={bookingDetails} />}
      </section>
    </>
  );
}
