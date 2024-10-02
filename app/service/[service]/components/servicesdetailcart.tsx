import { Add, LocalMallOutlined, Remove } from "@mui/icons-material";
import { ServiceDetailValue, ServicesDetail } from "app/types/ServicesDetail";

export interface ServicesDetailCartProps {
  count: number;
  decrementAddCount: (serviceDetail: ServicesDetail) => void;
  incrementAddCount: (serviceDetail: ServicesDetail) => void;
  selectedServiceDetailList: ServicesDetail[];
}

export default function ServicesDetailCart({
  count,
  decrementAddCount,
  incrementAddCount,
  selectedServiceDetailList,
}: ServicesDetailCartProps) {
  const renderPositiveCountContent = (
    selectedServiceDetail: ServicesDetail
  ): JSX.Element => {
    return (
      <div className="service-detail-content-detail-right-positive-count">
        <div onClick={() => decrementAddCount(selectedServiceDetail)}>
          <Remove color="secondary" />
        </div>
        {count}
        <div onClick={() => incrementAddCount(selectedServiceDetail)}>
          <Add color="secondary" />
        </div>
      </div>
    );
  };

  return (
    <div className="services-detail-cart">
      <span className="services-detail-cart-header">Cart</span>
      {selectedServiceDetailList.map(
        (selectedServiceDetail: ServicesDetail) => (
          <>
            <div className="services-detail-cart-items">
              <span>{selectedServiceDetail.headerDescription}</span>
              <div className="service-detail-content-detail-right">
                <button className="service-detail-content-detail-right-text">
                  {renderPositiveCountContent(selectedServiceDetail)}
                </button>
              </div>
              <span className="services-detail-cart-items-price">
                ${selectedServiceDetail.price}
              </span>
            </div>
            {selectedServiceDetail.details.map((detail: ServiceDetailValue) => (
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
          </>
        )
      )}
      {selectedServiceDetailList.length === 0 && (
        <div className="services-detail-cart-empty">
          <LocalMallOutlined />
          <span className="services-detail-cart-empty-text">
            No items in your cart
          </span>
        </div>
      )}
    </div>
  );
}
