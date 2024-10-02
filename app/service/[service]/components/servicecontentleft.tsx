import { Star } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { SpecificServicesOffered } from "app/types/SpecificServicesOffered";
import Image from "next/image";

export default function ServiceContentLeft() {
  const SpecificServicesList: SpecificServicesOffered[] = [
    {
      serviceUrl: "/images/bestseller.png",
      serviceText: "Bestsellers",
    },
    {
      serviceUrl: "/images/bestseller.png",
      serviceText: "Ayurvedic Massage",
    },
    {
      serviceUrl: "/images/bestseller.png",
      serviceText: "Massage",
    },
    {
      serviceUrl: "/images/bestseller.png",
      serviceText: "Hair Color",
    },
    {
      serviceUrl: "/images/bestseller.png",
      serviceText: "Pedicure",
    },
    {
      serviceUrl: "/images/bestseller.png",
      serviceText: "Facial & Cleanup",
    },
    {
      serviceUrl: "/images/bestseller.png",
      serviceText: "Detan",
    },
    {
      serviceUrl: "/images/bestseller.png",
      serviceText: "Haircut & Beard Styling",
    },
  ];

  return (
    <div className="service-content-left">
      <span className="service-content-left-main-text">
        Salon Prime for kids & men
      </span>
      <div className="service-content-left-rating">
        <Star color="secondary" />
        <span className="service-content-left-rating-text">
          4.87 (5.7 M bookings)
        </span>
      </div>
      <div className="service-content-left-services">
        <div className="service-content-left-services-header">
          <span className="service-content-left-services-header-text">
            Select a service
          </span>
          <Divider sx={{ width: "72%" }} />
        </div>
        <div className="service-content-left-services-container">
          {SpecificServicesList.map(
            (specificServices: SpecificServicesOffered) => (
              <div
                className="service-content-left-services-container-card"
                key={specificServices.serviceText}
              >
                <Image
                  src={specificServices.serviceUrl}
                  alt="bestseller"
                  width="70"
                  height="70"
                  className="service-content-left-services-container-card-image"
                />
                <span className="service-content-left-services-container-card-text">
                  {specificServices.serviceText}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
