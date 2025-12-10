import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Office } from "../types/type";
import { z } from "zod";
import { bookingSchema } from "../types/validationBooking";
import apiClient, { isAxiosError } from "../services/apiService";
import OrderSummaryWrapper from "../wrappers/OrderSummaryWrapper";

export default function BookOffice() {
  const { slug } = useParams<{ slug: string }>();
  const [office, setOffice] = useState<Office | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    started_at: "",
    office_space_id: "",
    totalAmountWithUniqueCode: 0,
  });

  const [formError, setFormError] = useState<z.ZodIssue[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uniqueCode, setUniqueCode] = useState<number>(0);
  const [totalAmountWithUniqueCode, setTotalAmountWithUniqueCode] =
    useState<number>(0);

  useEffect(() => {
    console.log("Fetching office data...");
    apiClient
      .get(`/office/${slug}`)
      .then((response) => {
        setOffice(response.data.data);

        const officeSpaceId = response.data.data.id;
        const generateUniqueCode = Math.floor(100 + Math.random() * 900);
        const grandTotal = response.data.data.price + generateUniqueCode;

        setUniqueCode(generateUniqueCode);
        setTotalAmountWithUniqueCode(grandTotal);

        setFormData((prevData) => ({
          ...prevData,
          office_space_id: officeSpaceId,
          total_amount: grandTotal,
        }));

        setLoading(false);
      })
      .catch((error: unknown) => {
        if (isAxiosError(error)) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred");
        }

        setLoading(false);
      });
  }, [slug]);

  if (loading)
    return (
      <p className="text-center text-lg font-semibold mt-10 mb-10">
        Loading...
      </p>
    );

  if (error)
    return (
      <p className="text-center text-lg font-semibold mt-10 mb-10 text-red-500">
        Error loading: {error}
      </p>
    );

  if (!office)
    return (
      <p className="text-center text-lg font-semibold mt-10 mb-10 text-red-500">
        Data not found
      </p>
    );

  const baseURL = import.meta.env.VITE_REACT_STORAGE_URL;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = bookingSchema.safeParse(formData);

    if (!validation.success) {
      setFormError(validation.error.issues);

      return;
    }

    setIsLoading(true);

    try {
      const response = await apiClient.post("/booking-transaction", {
        ...formData,
      });

      navigate("/success-booking", {
        state: {
          office,
          booking: response.data.data,
        },
      });
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        setError(error.message);
      } else {
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
        <h1 className="text-center mx-auto font-extrabold text-[32px] lg:text-[40px] leading-[40px] lg:leading-[60px] text-white mb-5 z-20 px-4">
          Let's Get You Settled
        </h1>
        <div className="absolute w-full h-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_91.83%)] z-10" />
        <img
          src={`${baseURL}/${office.thumbnail}`}
          className="absolute w-full h-full object-cover object-top"
          alt=""
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col lg:flex-row justify-center max-w-[1130px] mx-auto gap-[30px] mb-20 z-20 px-4 lg:px-0"
      >
        <div className="flex flex-col shrink-0 w-full lg:w-[500px] h-fit rounded-[20px] border border-[#E0DEF7] p-[20px] lg:p-[30px] gap-[30px] bg-white shadow-sm lg:shadow-none">
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
                  src="/assets/images/icons/location.svg"
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

          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg">Fill in Your Info</h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold">
                Full Name
              </label>
              <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A]">
                <img
                  src="/assets/images/icons/security-user-black.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  id="name"
                  autoComplete="name"
                  className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]"
                  placeholder="Type your name"
                />
              </div>

              {formError.find((error) => error.path.includes("name")) && (
                <p className="text-red-500 text-sm">Full name is required</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone_number" className="font-semibold">
                Phone Number
              </label>
              <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A]">
                <img
                  src="/assets/images/icons/call-black.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <input
                  type="tel"
                  name="phone_number"
                  onChange={handleChange}
                  value={formData.phone_number}
                  id="phone_number"
                  autoComplete="tel"
                  className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]"
                  placeholder="Type your phone number"
                />
              </div>

              {formError.find((error) =>
                error.path.includes("phone_number")
              ) && (
                <p className="text-red-500 text-sm">Phone number is required</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="date" className="font-semibold">
                Check-in
              </label>
              <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A] overflow-hidden">
                <img
                  src="/assets/images/icons/calendar-black.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <input
                  type="date"
                  name="started_at"
                  onChange={handleChange}
                  value={formData.started_at}
                  id="date"
                  className="relative appearance-none outline-none w-full py-3 font-semibold [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0"
                />
              </div>

              {formError.find((error) => error.path.includes("started_at")) && (
                <p className="text-red-500 text-sm">Check-in is required</p>
              )}
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

          <hr className="border-[#F6F5FD]" />

          <div className="flex flex-col gap-[30px]">
            <h2 className="font-bold text-lg">Included Amenities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/images/icons/coffee.svg"
                  className="w-[34px] h-[34px]"
                  alt="icon"
                />
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold text-lg leading-[24px]">
                    Complimentary Refreshments
                  </p>
                  <p className="text-sm leading-[21px]">
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
                  <p className="font-bold text-lg leading-[24px]">
                    Flexible Access
                  </p>
                  <p className="text-sm leading-[21px]">Open 24/7 for you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <OrderSummaryWrapper
          office={office}
          uniqueCode={uniqueCode}
          totalAmount={totalAmountWithUniqueCode}
          isLoading={isLoading}
        />
      </form>
    </>
  );
}
