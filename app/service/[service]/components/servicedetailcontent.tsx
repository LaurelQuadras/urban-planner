import { ServiceDetailValue, ServicesDetail } from "app/types/ServicesDetail";
import VideoPlayer from "./videoplayer";
import { Inventory2, Star } from "@mui/icons-material";
import { Divider } from "@mui/material";

export default function ServiceDetailContent() {
  const ServiceDetailList: ServicesDetail[] = [
    {
      headerText: "Bestsellers",
      headerDescription: "Grooming essentials",
      rating: "4.88 (932K reviews)",
      price: "$599",
      time: "1 hr 5 mins",
      details: [
        {
          key: "Haircut",
          value: "Haircut for men",
        },
        {
          key: "Shave / Beard grooming",
          value: "Beard trimming & styling",
        },
        {
          key: "Massage",
          value: "10min relaxing massage",
        },
      ],
    },
  ];
  return (
    <div className="service-detail-content">
      <VideoPlayer videoId="YCuWQjU9-Wk" />
      <div className="service-detail-content-detail">
        {ServiceDetailList.map((serviceDetail: ServicesDetail) => (
          <>
            <h2 className="service-detail-content-detail-header-text">
              {serviceDetail.headerText}
            </h2>
            <div className="service-detail-content-detail-body">
              <div className="service-detail-content-detail-body-package">
                <Inventory2
                  color="secondary"
                  sx={{ width: "1rem", height: "1rem" }}
                />
                <span className="service-detail-content-detail-body-package-text">
                  PACKAGE
                </span>
              </div>
              <span className="service-detail-content-detail-body-description">
                {serviceDetail.headerDescription}
              </span>
              <div className="service-detail-content-detail-body-package">
                <Star
                  color="secondary"
                  sx={{ width: "1rem", height: "1rem" }}
                />
                <span className="service-detail-content-detail-body-package-text">
                  {serviceDetail.rating}
                </span>
              </div>
              <div className="service-detail-content-detail-body-info">
                <span className="service-detail-content-detail-body-info-price">
                  {serviceDetail.price}
                </span>
                <span className="service-detail-content-detail-body-info-time">
                  {serviceDetail.time}
                </span>
              </div>
              <Divider />
              {serviceDetail.details.map((detail: ServiceDetailValue) => (
                <div className="service-detail-content-detail-body-detail">
                  *{" "}
                  <span className="service-detail-content-detail-body-detail-key">
                    {detail.key}
                  </span>{" "}
                  :{" "}
                  <span className="service-detail-content-detail-body-detail-value">
                    {detail.value}
                  </span>
                </div>
              ))}
              <button className="service-detail-content-detail-body-button">
                <span className="service-detail-content-detail-body-button-text">
                  Edit your package
                </span>
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
