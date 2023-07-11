import { Service } from "../home";

export interface AddBusiness {
  name: string;
  image: File;
  description: string;
}

export interface BusinessList {
  data: Business[];
  next_page: string;
  message: string;
  status: string;
}

export interface Business {
  id: number;
  user_id: number;
  name: string;
  image: string;
  description: string;
  created_at: string;
  updated_at: string;
  reviews_avg_rating?: any;
  services: Service[];
}
