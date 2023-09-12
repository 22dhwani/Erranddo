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
  email?: any;
  mobile_number: string;
  website_url: string;
  facebook_url?: any;
  twitter_url?: any;
  instagram_url?: any;
  user_request_intrests: Userrequestintrest[];
  files: any[];
  request_quotes: Requestquote[];
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
