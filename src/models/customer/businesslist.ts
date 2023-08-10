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
}

export interface Service {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
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
