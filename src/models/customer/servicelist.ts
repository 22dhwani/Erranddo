export interface RootObject {
  data: ServiceList[];
  next_page: string;
  message: string;
  status: string;
}

export interface ServiceList {
  id: number;
  user_id: number;
  name: string;
  image: string;
  description: string;
  created_at: string;
  updated_at: string;
  reviews_avg_rating?: number;
  services: Service[];
  user_request_intrests: Userrequestintrest[];
  files: any[];
}

export interface Userrequestintrest {
  id: number;
  user_request_id: number;
  user_business_id: number;
  customer_id: number;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
  laravel_through_key: number;
}

export interface createReview {
  userBusinessId?: string;
  serviceId: number;
  description: string;
  rating: string;
}
