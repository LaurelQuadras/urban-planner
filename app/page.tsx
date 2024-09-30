import "../styles/global.scss";
import TopNavigation from "./components/topnavigation";
import LocationSection from "./components/locationsection";
import WhyUsSection from "./components/whyussection";
import ServicesOffered from "./components/servicesoffered";
import BottomFooter from "./components/bottomfooter";

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
      <BottomFooter />
    </h1>
  );
}
