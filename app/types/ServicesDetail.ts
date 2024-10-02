export type ServicesDetail = {
  id: number;
  headerText: string;
  headerDescription: string;
  rating: string;
  price: string;
  time: string;
  details: ServiceDetailValue[];
};

export type ServiceDetailValue = {
  key: string;
  value: string;
};
