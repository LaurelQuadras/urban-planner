"use client";

import { ServicesDetail } from "app/types/ServicesDetail";
import VideoPlayer from "./videoplayer";
import { useState } from "react";
import ServicesDetailCart from "./servicesdetailcart";
import ServiceDetailItems from "./servicedetailitems";

export default function ServiceDetailContent() {
  const ServiceDetailList: ServicesDetail[] = [
    {
      id: 1,
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
    {
      id: 2,
      headerText: "Bestsellers",
      headerDescription: "Cut & Color",
      rating: "4.88 (873K reviews)",
      price: "$859",
      time: "60 mins",
      details: [
        {
          key: "Haircut + Hair color",
          value: "Haircut for men",
        },
        {
          key: "Hair color (Garnier Hair Color)",
          value: "Garnier colors - Brown black (shade 3)",
        },
      ],
    },
  ];

  const [count, setCount] = useState<number>(0);
  const [selectedServiceDetailList, setSelectedServiceDetailList] = useState<
    ServicesDetail[]
  >([]);

  const incrementAddCount = (serviceDetail: ServicesDetail): void => {
    setCount((addCount) => addCount + 1);
    if (!selectedServiceDetailList.includes(serviceDetail)) {
      const newServiceDetailList: ServicesDetail[] = [
        ...selectedServiceDetailList,
        serviceDetail,
      ];
      setSelectedServiceDetailList(newServiceDetailList);
    }
  };

  const incrementAddCountOnButtonClick = (
    serviceDetail: ServicesDetail
  ): void => {
    if (count === 0) {
      setCount((addCount) => addCount + 1);
      if (!selectedServiceDetailList.includes(serviceDetail)) {
        const newServiceDetailList: ServicesDetail[] = [
          ...selectedServiceDetailList,
          serviceDetail,
        ];
        setSelectedServiceDetailList(newServiceDetailList);
      }
    }
  };

  const decrementAddCount = (serviceDetail: ServicesDetail): void => {
    setCount((addCount) => addCount - 1);
    if (selectedServiceDetailList.includes(serviceDetail)) {
      const newServiceDetailList: ServicesDetail[] =
        selectedServiceDetailList.filter(
          (selectedServiceDetail: ServicesDetail) =>
            selectedServiceDetail.id === serviceDetail.id
        );
      setSelectedServiceDetailList(newServiceDetailList);
    }
  };

  return (
    <div className="service-detail-content">
      <VideoPlayer videoId="YCuWQjU9-Wk" />
      <div className="service-detail-content-detail">
        <div>
          {ServiceDetailList.map((serviceDetail: ServicesDetail) => (
            <ServiceDetailItems
              serviceDetail={serviceDetail}
              count={count}
              decrementAddCount={decrementAddCount}
              incrementAddCount={incrementAddCount}
              incrementAddCountOnButtonClick={incrementAddCountOnButtonClick}
              key={serviceDetail.id}
            />
          ))}
        </div>
        <ServicesDetailCart
          count={count}
          incrementAddCount={incrementAddCount}
          decrementAddCount={decrementAddCount}
          selectedServiceDetailList={selectedServiceDetailList}
        />
      </div>
    </div>
  );
}
