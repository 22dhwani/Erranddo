import { Service } from "../home";
import { UserData } from "../user";

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

export interface AddBusiness {
  name: string;
  description: string;
  profile_picture: File | undefined;
  service_images: FileList | undefined;
}

export interface AddBusinessService {
  user_business_id: number;
  service_id: number;
  radius: string[];
  postcode: string[];
  nation_wide: boolean;
  remote_service: boolean;
}

export interface EditBusinessService {
  user_business_id: number;
  service_id: number;
  radius: string[];
  postcode: string[];
  nation_wide: boolean;
  remote_service: boolean;
}

export interface AddBusinessData {
  data: AddBusinessDataRespone;
  message: string;
  status: string;
}

export interface AddBusinessDataRespone {
  id: number;
  user_id: number;
  name: string;
  image: string;
  description: string;
  created_at: string;
  updated_at: string;
  user: UserData;
}

export interface ServiceList {
  data: ServiceData[];
  message: string;
  status: string;
}

export interface ServiceData {
  id: number;
  user_id?: number;
  user_business_id: number;
  service_id: number;
  nation_wide: number;
  remote_service: number;
  created_at: string;
  updated_at: string;
  user_bussiness: Userbussiness;
  service: Service;
}

export interface Userbussiness {
  id: number;
  user_id: number;
  name: string;
  image: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface AddBusinessServiceData {
  data: Data;
  message: string;
  status: string;
}

export interface Data {
  id: number;
  user_id?: any;
  user_business_id: number;
  service_id: number;
  nation_wide: number;
  remote_service: number;
  created_at: string;
  updated_at: string;
  post_codes: Postcode[];
}

export interface Postcode {
  id: number;
  service_id: number;
  user_businesses_id: number;
  postcode_id: number;
  radius: string;
  created_at: string;
  updated_at: string;
}
