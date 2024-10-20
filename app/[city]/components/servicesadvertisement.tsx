import { Star } from "@mui/icons-material";
import { ServicesOffered } from "app/types/ServicesOffered";
import Image from "next/image";

export interface ServicesAdvertisementProps {
  servicesOfferedList: ServicesOffered[];
  servicesName: string;
}

export default function ServicesAdvertisement({
  servicesOfferedList,
  servicesName,
}: ServicesAdvertisementProps) {
  return (
    <div className="services-advertisement">
      <span className="services-advertisement-text">{servicesName}</span>
      <div className="services-advertisement-carousel">
        {servicesOfferedList.map(
          (servicesOffered: ServicesOffered, index: number) => (
            <div className="services-advertisement-carousel-card" key={index}>
              <Image
                src={servicesOffered.productUrl}
                alt="power service ac service"
                width="233"
                height="233"
                className="services-advertisement-carousel-card-image"
              />
              <div className="services-advertisement-carousel-card-content">
                {servicesOffered.productText && (
                  <span className="services-advertisement-carousel-card-content-text-one">
                    {servicesOffered.productText}
                  </span>
                )}
                {servicesOffered.productRating && (
                  <div className="services-advertisement-carousel-card-content-rating">
                    <Star />
                    <span className="services-advertisement-carousel-card-content-rating-text">
                      {servicesOffered.productRating}
                    </span>
                  </div>
                )}
                {servicesOffered.productCost && (
                  <span className="services-advertisement-carousel-card-content-text-two">
                    {servicesOffered.productCost}
                  </span>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
