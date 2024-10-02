import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function ServicesOffered() {
  const servicesOfferedArrayList = [
    "Ac Repair & Service",
    "Full Home Painting",
    "Wall Panels",
    "Rooms/ Walls Painting",
    "Native Water Purifier",
    "Salon Classic",
    "Microwave Repair",
    "Refrigerator Repair",
    "Waiter Purifier Repair & Service",
    "Salon Prime For Kids & Men",
    "Electrician",
    "Carpenter",
    "Bathroom & Kitchen Cleaning",
    "Native Smart Locks",
    "Furniture Assembly",
    "Chimney Repair & Service",
    "Full Home Cleaning",
    "Hair Studio For Women",
    "Washing Machine Repair",
    "Spa For Women",
    "Sofa & Carpet Cleaning",
    "Massage For Men",
    "Plumber",
    "Salon Prime",
  ];
  return (
    <div className="services-offered">
      <span className="services-offered-generic-text">Services Offered</span>
      <div className="services-offered-buttons">
        {servicesOfferedArrayList.map((service: string) => (
          <button className="services-offered-buttons-button" key={service}>
            {service}
            <KeyboardArrowDownIcon color="secondary" />
          </button>
        ))}
      </div>
    </div>
  );
}
