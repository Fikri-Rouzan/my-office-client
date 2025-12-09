import { Swiper, SwiperSlide } from "swiper/react";
import CityCard from "../components/CityCard";
import { useEffect, useState } from "react";
import { City } from "../types/type";
import { Link } from "react-router";
import apiClient from "../services/apiService";

export default function HomeCityWrapper() {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient
      .get("/cities")
      .then((response) => {
        setCities(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

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
        Error loading data: {error}
      </p>
    );
  }

  return (
    <section
      id="Cities"
      className="flex flex-col gap-[20px] md:gap-[30px] mt-[50px] md:mt-[100px]"
    >
      <div className="w-full max-w-[1130px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 xl:px-0 gap-4 md:gap-0">
        <h2 className="font-bold text-2xl md:text-[32px] leading-[36px] md:leading-[48px] text-center md:text-left whitespace-normal md:whitespace-nowrap">
          Explore Our <br className="hidden md:block" />
          Top Cities
        </h2>
        <a
          href="#"
          className="rounded-full py-3 px-5 bg-white font-bold border border-gray-200 md:border-none shadow-sm md:shadow-none hover:bg-gray-100 transition"
        >
          Explore All Cities
        </a>
      </div>

      {/* Swiper Section */}
      <div className="swiper w-full">
        <div className="swiper-wrapper">
          <Swiper
            direction="horizontal"
            spaceBetween={20}
            slidesPerView={"auto"}
            slidesOffsetAfter={20}
            slidesOffsetBefore={20}
            breakpoints={{
              768: {
                spaceBetween: 30,
                slidesOffsetAfter: 30,
                slidesOffsetBefore: 30,
              },
            }}
          >
            {cities.map((city) => (
              <SwiperSlide
                key={city.id}
                className="!w-fit xl:first-of-type:pl-[calc((100%-1130px-60px)/2)] xl:last-of-type:pr-[calc((100%-1130px-60px)/2)]"
              >
                <Link to={`/city/${city.slug}`}>
                  <CityCard city={city} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
