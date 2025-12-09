import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { City } from "../types/type";
import OfficeCard from "../components/OfficeCard";
import apiClient, { isAxiosError } from "../services/apiService";

export default function CityDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [city, setCity] = useState<City | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient
      .get(`/city/${slug}`)
      .then((response) => {
        setCity(response.data.data);
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
        Error loading data: {error}
      </p>
    );
  }

  if (!city) {
    return (
      <p className="text-center text-lg font-semibold mt-10 mb-10 text-red-500">
        City not found
      </p>
    );
  }

  const baseURL = import.meta.env.VITE_REACT_STORAGE_URL;

  return (
    <>
      <header className="flex flex-col w-full relative overflow-hidden">
        <section
          id="Hero-Banner"
          className="relative flex flex-col lg:block w-full lg:h-[434px]"
        >
          <div
            id="Hero-Image"
            className="absolute top-0 right-0 w-full h-[300px] lg:w-[calc(100%-((100%-1130px)/2)-305px)] lg:h-[434px] overflow-hidden z-0"
          >
            <img
              src={`${baseURL}/${city.photo}`}
              className="w-full h-full object-cover object-center"
              alt="hero background"
            />
            <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-white/30 to-white"></div>
          </div>
          <div className="relative w-full max-w-[1130px] mx-auto px-4 lg:px-0 z-10 pt-[120px] lg:pt-[70px]">
            <div
              id="Hero-Text"
              className="flex flex-col w-full lg:max-w-[650px] h-fit rounded-[30px] border border-[#E0DEF7] p-6 lg:p-10 gap-[20px] lg:gap-[30px] bg-white shadow-lg lg:shadow-none"
            >
              <h1 className="font-extrabold text-[32px] lg:text-[50px] leading-[40px] lg:leading-[60px]">
                Premium Offices in
                <br />
                <span className="text-[#0D903A]">{city.name}</span>
              </h1>
              <p className="text-base lg:text-lg leading-7 lg:leading-8 text-[#000929]">
                The right workspace drives productivity and well-being, creating
                the perfect environment for career growth.
              </p>
            </div>
          </div>
        </section>
      </header>

      <section
        id="Fresh-Space"
        className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[50px] lg:mt-[70px] mb-[120px] px-4 lg:px-0"
      >
        <h2 className="font-bold text-2xl lg:text-[32px] leading-8 lg:leading-[48px] whitespace-normal lg:whitespace-nowrap text-center lg:text-left">
          Explore Locations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px]">
          {city.officeSpaces.map((office) => (
            <Link key={office.id} to={`/office/${office.slug}`}>
              <OfficeCard office={office} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
