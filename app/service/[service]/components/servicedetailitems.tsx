import { Add, Inventory2, Remove, Star } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { ServiceDetailValue, ServicesDetail } from "app/types/ServicesDetail";

export interface ServiceDetailItemsProps {
  serviceDetail: ServicesDetail;
  count: number;
  decrementAddCount: (serviceDetail: ServicesDetail) => void;
  incrementAddCount: (serviceDetail: ServicesDetail) => void;
  incrementAddCountOnButtonClick: (serviceDetail: ServicesDetail) => void;
}

export default function ServiceDetailItems({
  serviceDetail,
  count,
  decrementAddCount,
  incrementAddCount,
  incrementAddCountOnButtonClick,
}: ServiceDetailItemsProps) {
  const renderPositiveCountContent = (): JSX.Element => {
    return (
      <div className="service-detail-content-detail-right-positive-count">
        <div onClick={() => decrementAddCount(serviceDetail)}>
          <Remove color="secondary" />
        </div>
        {count}
        <div onClick={() => incrementAddCount(serviceDetail)}>
          <Add color="secondary" />
        </div>
      </div>
    );
  };

  return (
    <div className="service-detail-content-main">
      <div
        className="service-detail-content-detail-left"
        key={serviceDetail.price}
      >
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
            <Star color="secondary" sx={{ width: "1rem", height: "1rem" }} />
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
            <div
              className="service-detail-content-detail-body-detail"
              key={detail.key}
            >
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
      </div>
      <div
        className="service-detail-content-detail-right"
        onClick={() => incrementAddCountOnButtonClick(serviceDetail)}
      >
        <button className="service-detail-content-detail-right-text">
          {count === 0 ? "Add" : renderPositiveCountContent()}
        </button>
      </div>
    </div>
  );
}
