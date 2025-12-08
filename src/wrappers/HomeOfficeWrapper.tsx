import { useEffect, useState } from "react";
import OfficeCard from "../components/OfficeCard";
import { Office } from "../types/type";
import { Link } from "react-router";
import apiClient from "../services/apiService";

export default function HomeOfficeWrapper() {
  const [offices, setOffices] = useState<Office[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient
      .get("/offices")
      .then((response) => {
        setOffices(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
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
      id="Fresh-Space"
      className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[50px] lg:mt-[100px] mb-[120px] px-4 lg:px-0"
    >
      <h2 className="font-bold text-2xl lg:text-[32px] leading-[36px] lg:leading-[48px] text-center whitespace-normal lg:whitespace-nowrap">
        Find Your Perfect Workspace
        <br />
        Elevate Your Focus and Efficiency
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px]">
        {offices.map((office) => (
          <Link key={office.id} to={`/office/${office.slug}`}>
            <OfficeCard office={office} />
          </Link>
        ))}
      </div>
    </section>
  );
}
