import ServiceContentLeft from "./servicecontentleft";
import ServiceDetailContent from "./servicedetailcontent";

export default function ServiceContent() {
  return (
    <div className="service-content">
      <ServiceContentLeft />
      <ServiceDetailContent />
    </div>
  );
}
