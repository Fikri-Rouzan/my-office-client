import HomeBenefitWrapper from "../wrappers/HomeBenefitWrapper";
import HomeCityWrapper from "../wrappers/HomeCityWrapper";
import HomeHeroWrapper from "../wrappers/HomeHeroWrapper";
import HomeOfficeWrapper from "../wrappers/HomeOfficeWrapper";

export default function Home() {
  return (
    <>
      <HomeHeroWrapper />
      <HomeCityWrapper />
      <HomeBenefitWrapper />
      <HomeOfficeWrapper />
    </>
  );
}
