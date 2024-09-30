import { Divider } from "@mui/material";
import TopNavigation from "../../[city]/components/topnavigation";
import "../../../styles/global.scss";
import ServiceContent from "./components/servicecontent";
import BottomFooter from "app/components/bottomfooter";

type Params = {
  params: {
    service: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `${params.service}` };
}

export default function Page() {
  return (
    <>
      <TopNavigation />
      <Divider />
      <ServiceContent />
      <BottomFooter />
    </>
  );
}
