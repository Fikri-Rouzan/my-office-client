import { City } from "../types/type";

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  const baseURL = import.meta.env.VITE_REACT_STORAGE_URL;

  return (
    <div className="card">
      <div className="relative flex shrink-0 w-[160px] h-[220px] md:w-[200px] md:h-[260px] lg:w-[230px] lg:h-[300px] rounded-[20px] overflow-hidden group transition-all duration-300 hover:shadow-lg">
        <div className="relative flex flex-col justify-end w-full h-full p-3 md:p-5 gap-[2px] bg-[linear-gradient(180deg,_rgba(0,0,0,0)_49.87%,_rgba(0,0,0,0.8)_100%)] z-10">
          <h3 className="font-bold text-lg md:text-xl leading-[24px] md:leading-[30px] text-white group-hover:underline">
            {city.name}
          </h3>
          <p className="text-white text-xs md:text-base opacity-90">
            {city.officeSpaces_count} Offices
          </p>
        </div>

        <img
          src={`${baseURL}/${city.photo}`}
          className="absolute w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          alt={city.name}
        />
      </div>
    </div>
  );
}
