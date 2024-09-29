import { PeopleOutlineOutlined, StarBorderOutlined } from "@mui/icons-material";
import Image from "next/image";

export default function CityServices() {
  return (
    <div className="city-services">
      <div className="city-services-services">
        <span className="city-services-services-text">
          Home services at your doorstop
        </span>
        <div className="city-services-services-looking-for">
          <span className="city-services-services-looking-for-text">
            What are you looking for?
          </span>
          <div className="city-services-services-looking-for-functionality">
            <div className="city-services-services-looking-for-functionality-container">
              <div className="city-services-services-looking-for-functionality-container-services">
                <Image
                  src="/images/womens-salon-and-spa.png"
                  alt="womens salon and spa"
                  width="70"
                  height="70"
                />
              </div>
              <span className="city-services-services-looking-for-functionality-container-services-text">
                Women's Salon & Spa
              </span>
            </div>
            <div className="city-services-services-looking-for-functionality-container">
              <div className="city-services-services-looking-for-functionality-container-services">
                <Image
                  src="/images/mens-salon-and-massage.png"
                  alt="mens salon and massage"
                  width="70"
                  height="70"
                />
              </div>
              <span className="city-services-services-looking-for-functionality-container-services-text">
                Men's Salon & Massage
              </span>
            </div>
            <div className="city-services-services-looking-for-functionality-container">
              <div className="city-services-services-looking-for-functionality-container-services">
                <Image
                  src="/images/ac-and-appliance-repair.png"
                  alt="ac and appliance repair"
                  width="70"
                  height="70"
                />
              </div>
              <span className="city-services-services-looking-for-functionality-container-services-text">
                AC & Appliance Repair
              </span>
            </div>
            <div className="city-services-services-looking-for-functionality-container">
              <div className="city-services-services-looking-for-functionality-container-services">
                <Image
                  src="/images/cleaning-and-pest-control.png"
                  alt="cleaning and pest control"
                  width="70"
                  height="70"
                />
              </div>
              <span className="city-services-services-looking-for-functionality-container-services-text">
                Cleaning & Pest Control
              </span>
            </div>
            <div className="city-services-services-looking-for-functionality-container">
              <div className="city-services-services-looking-for-functionality-container-services">
                <Image
                  src="/images/electrician-plumber-carpenter.png"
                  alt="electrician plumber carpenter"
                  width="70"
                  height="70"
                />
              </div>
              <span className="city-services-services-looking-for-functionality-container-services-text">
                Electrician, Plumber & Carpenter
              </span>
            </div>
            <div className="city-services-services-looking-for-functionality-container">
              <div className="city-services-services-looking-for-functionality-container-services">
                <Image
                  src="/images/native-water-purifier.png"
                  alt="native water purifier"
                  width="70"
                  height="70"
                />
              </div>
              <span className="city-services-services-looking-for-functionality-container-services-text">
                Native Water Purifier
              </span>
            </div>
          </div>
        </div>
        <div className="city-services-services-stats">
          <div className="city-services-services-stats-rating">
            <StarBorderOutlined sx={{ width: "3rem", height: "3rem" }} />
            <div className="city-services-services-stats-rating-number">
              <span className="city-services-services-stats-rating-number-rating">
                4.8
              </span>
              <span className="city-services-services-stats-rating-number-text">
                Service Rating
              </span>
            </div>
          </div>
          <div className="city-services-services-stats-rating">
            <PeopleOutlineOutlined sx={{ width: "3rem", height: "3rem" }} />
            <div className="city-services-services-stats-rating-number">
              <span className="city-services-services-stats-rating-number-rating">
                12M+
              </span>
              <span className="city-services-services-stats-rating-number-text">
                Customers Globally
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="city-services-photo">
        <Image
          src="/images/city-advertisement.png"
          alt="city advertisement"
          width="700"
          height="700"
        />
      </div>
    </div>
  );
}
