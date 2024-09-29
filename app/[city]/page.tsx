import TopNavigation from "app/[city]/components/topnavigation";
import "../../styles/global.scss";
import { Divider } from "@mui/material";
import CityServices from "./components/cityservices";
import ServicesAdvertisement from "./components/servicesadvertisement";

type Params = {
  params: {
    city: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `${params.city}` };
}

export type ServicesOffered = {
  productUrl: string;
  productText: string;
  productRating?: string;
  productCost?: string;
};

export const ServicesOfferedList: ServicesOffered[] = [
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

export const MoreServicesList: ServicesOffered[] = [
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
        servicesOfferedList={MoreServicesList}
      />
    </>
  );
}
