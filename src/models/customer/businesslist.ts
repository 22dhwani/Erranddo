import { User } from "../pro/leadslist";

export interface RootObject {
  data: Business;
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
  reviews_avg_rating: number;
  files: File[];
  services: Service[];
  is_responded: boolean;
  is_interest: boolean;
  request_quotes: Requestquote[];
  business_postcode: BusinessPostCode;
  user: User;
}

export interface Notinteresteduserrequest {
  id: number;
  user_request_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  laravel_through_key: number;
}
export interface Service {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
}
export interface BusinessPostCode {
  id: number;
  name: string;
  distance: string;
  latitude: string;
  longitude: string;
}
export interface File {
  id: number;
  user_id: number;
  fileable_type: string;
  fileable_id: number;
  file_path: string;
  created_at: string;
  updated_at: string;
}

export interface Requestquote {
  id: number;
  user_request_id: number;
  user_business_id: number;
  quote: number;
  payment_type: string;
  created_at: string;
  updated_at: string;
}
