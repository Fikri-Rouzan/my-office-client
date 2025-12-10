import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Office } from "../types/type";
import apiClient, { isAxiosError } from "../services/apiService";
import OfficeBookingWrapper from "../wrappers/OfficeBookingWrapper";

export default function OfficeDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [office, setOffice] = useState<Office | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient
      .get(`/office/${slug}`)
      .then((response) => {
        setOffice(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        if (isAxiosError(error)) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred");
        }
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <p className="text-center text-lg font-semibold mt-10 mb-10">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-lg font-semibold mt-10 mb-10 text-red-500">
        {error}
      </p>
    );
  }

  if (!office) {
    return (
      <p className="text-center text-lg font-semibold mt-10 mb-10 text-red-500">
        Data not found
      </p>
    );
  }

  const baseURL = import.meta.env.VITE_REACT_STORAGE_URL;

  return (
    <>
      {/* Gallery Section */}
      <section id="Gallery" className="-mb-[50px]">
        <div className="swiper w-full">
          <div className="swiper-wrapper">
            <Swiper
              direction="horizontal"
              spaceBetween={20}
              slidesPerView={"auto"}
              slidesOffsetAfter={20}
              slidesOffsetBefore={20}
              breakpoints={{
                1024: {
                  spaceBetween: 30,
                  slidesOffsetAfter: 30,
                  slidesOffsetBefore: 30,
                },
              }}
            >
              {office.photos.map((photo) => (
                <SwiperSlide key={photo.id} className="!w-fit">
                  <div className="w-[85vw] h-[300px] lg:w-[700px] lg:h-[550px] overflow-hidden rounded-[20px]">
                    <img
                      src={`${baseURL}/${photo.photo}`}
                      className="w-full h-full object-cover"
                      alt="thumbnail"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section
        id="Details"
        className="relative flex flex-col lg:flex-row w-full max-w-[1130px] mx-auto gap-[30px] mb-20 z-10 px-4 lg:px-0"
      >
        <div className="flex flex-col w-full rounded-[20px] border border-[#E0DEF7] p-[20px] lg:p-[30px] gap-[30px] bg-white shadow-sm lg:shadow-none">
          <p className="w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
            Trending
          </p>

          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-0">
            <div>
              <h1 className="font-extrabold text-[28px] lg:text-[32px] leading-[36px] lg:leading-[44px]">
                {office.name}
              </h1>
              <div className="flex items-center gap-[6px] mt-[10px]">
                <img
                  src="/assets/images/icons/location.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <p className="font-semibold text-sm lg:text-base">
                  {office.city.name}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[6px]">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="/assets/images/icons/star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                ))}
              </div>
              <p className="font-semibold text-left">5/5</p>
            </div>
          </div>

          <p className="leading-[28px] lg:leading-[30px] text-base">
            {office.about}
          </p>
          <hr className="border-[#F6F5FD]" />
          <h2 className="font-bold text-lg">Designed for Your Needs</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-[30px]">
            <div className="flex items-center gap-4">
              <img
                src="/assets/images/icons/security-user.svg"
                className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px]"
                alt="icon"
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-base lg:text-lg leading-[24px]">
                  Dedicated Privacy
                </p>
                <p className="text-xs lg:text-sm leading-[21px] text-gray-500">
                  Work without distractions.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/assets/images/icons/cup.svg"
                className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px]"
                alt="icon"
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-base lg:text-lg leading-[24px]">
                  Global Networking
                </p>
                <p className="text-xs lg:text-sm leading-[21px] text-gray-500">
                  Connect with startups worldwide.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/assets/images/icons/home-trend-up.svg"
                className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px]"
                alt="icon"
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-base lg:text-lg leading-[24px]">
                  Sustainable Growth
                </p>
                <p className="text-xs lg:text-sm leading-[21px] text-gray-500">
                  Support long-term business goals.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/assets/images/icons/coffee.svg"
                className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px]"
                alt="icon"
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-base lg:text-lg leading-[24px]">
                  Complimentary Refreshments
                </p>
                <p className="text-xs lg:text-sm leading-[21px] text-gray-500">
                  Stay energized throughout the day.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/assets/images/icons/3dcube.svg"
                className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px]"
                alt="icon"
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-base lg:text-lg leading-[24px]">
                  Focus-Optimized Spaces
                </p>
                <p className="text-xs lg:text-sm leading-[21px] text-gray-500">
                  Designed for maximum concentration.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/assets/images/icons/group.svg"
                className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px]"
                alt="icon"
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-base lg:text-lg leading-[24px]">
                  Flexible Access
                </p>
                <p className="text-xs lg:text-sm leading-[21px] text-gray-500">
                  Work from anywhere, 24/7.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-[#F6F5FD]" />

          <div className="flex flex-col gap-[6px]">
            <h2 className="font-bold text-lg">Location</h2>
            <p className="text-base">{office.address}</p>
          </div>
          <div className="overflow-hidden w-full h-[280px] rounded-[20px]">
            <div
              id="my-map-display"
              className="h-full w-full max-w-[none] bg-none"
            >
              <iframe
                className="h-full w-full border-0"
                frameBorder={0}
                title="Office Location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  office.name
                )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              />
            </div>
          </div>
        </div>

        <OfficeBookingWrapper office={office} />
      </section>
    </>
  );
}
