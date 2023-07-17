export interface Review {
  data: ReviewData[];
  message: string;
  status: string;
}

export interface ReviewData {
  map(
    arg0: (item: any, index: any) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
  id: number;
  user_id: number;
  user_business_id: number;
  service_id: number;
  rating: string;
  description: string;
  response?: any;
  created_at: string;
  updated_at: string;
  user_bussiness: Userbussiness;
  service: Service;
  user: User;
}

export interface Service {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: number;
  full_name: string;
  mobile_number?: string;
  address: string;
  city: string;
  postcode_id: number;
  bio: string;
  email: string;
  is_email_verified: string;
  is_mobile_verified: string;
  img_avatar: string;
  created_at: string;
  updated_at: string;
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
