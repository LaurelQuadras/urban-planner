import { Button } from "@mui/material";
import "../styles/global.scss";
import TopNavigation from "./components/topnavigation";
import LocationSection from "./components/locationsection";
import WhyUsSection from "./components/whyussection";
import ServicesOffered from "./components/servicesoffered";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
    <h1 className="text-2xl">
      <TopNavigation />
      <LocationSection />
      <WhyUsSection />
      <ServicesOffered />
    </h1>
  );
}
