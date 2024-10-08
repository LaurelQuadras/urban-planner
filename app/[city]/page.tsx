import TopNavigation from "app/[city]/components/topnavigation";
import "../../styles/global.scss";
import { Divider } from "@mui/material";
import CityServices from "./components/cityservices";
import ServicesAdvertisement from "./components/servicesadvertisement";
import { ServicesOffered } from "app/types/ServicesOffered";
import BottomFooter from "app/components/bottomfooter";

type Params = {
  params: {
    city: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `${params.city}` };
}

const ServicesOfferedList: ServicesOffered[] = [
  {
    productUrl: "/images/power-saver-ac-service.png",
    productText: "Power saver AC service",
    productRating: "4.82 (702K)",
    productCost: "$702",
  },
  {
    productUrl: "/images/ac-repair-split-open.png",
    productText: "AC repair (split/window)",
    productRating: "4.80 (872K)",
    productCost: "$299",
  },
  {
    productUrl: "/images/fan-repair.png",
    productText: "Fan repair (cieling/exhaust/wall)",
    productRating: "4.82 (64K)",
    productCost: "$109",
  },
  {
    productUrl: "/images/tap-repair.png",
    productText: "Tap repair",
    productRating: "4.12 (199K)",
    productCost: "$49",
  },
  {
    productUrl: "/images/top-load-washing-machine-repair.png",
    productText: "Fully automatic top load washing machine repair",
    productRating: "4.9 (918K)",
    productCost: "$299",
  },
];

const SalonForWomenList: ServicesOffered[] = [
  {
    productUrl: "/images/facial-and-cleanup.png",
    productText: "Facial & Cleanup",
  },
  {
    productUrl: "/images/waxing.png",
    productText: "Waxing",
  },
  {
    productUrl: "/images/hair-care.png",
    productText: "Hair care",
  },
  {
    productUrl: "/images/bleach-and-detan.png",
    productText: "Bleach & Detan",
  },
  {
    productUrl: "/images/threading-and-face-waxing.png",
    productText: "Threading & Face waxing",
  },
];

const ACApplicanceRepair: ServicesOffered[] = [
  {
    productUrl: "/images/ac-and-service-repair.png",
    productText: "AC and Service Repair",
  },
  {
    productUrl: "/images/washing-machine-repair.png",
    productText: "Washing Machine Repair",
  },
  {
    productUrl: "/images/refrigerator-repair.png",
    productText: "Refrigerator Repair",
  },
  {
    productUrl: "/images/water-purifier-repair.png",
    productText: "Water Purifier Repair",
  },
];

export default function Page() {
  return (
    <>
      <TopNavigation />
      <Divider />
      <CityServices />
      <ServicesAdvertisement
        servicesName="Most booked services"
        servicesOfferedList={ServicesOfferedList}
      />
      <ServicesAdvertisement
        servicesName="Salon for Women"
        servicesOfferedList={SalonForWomenList}
      />
      <ServicesAdvertisement
        servicesName="AC & appliance repair"
        servicesOfferedList={ACApplicanceRepair}
      />
      <BottomFooter />
    </>
  );
}
