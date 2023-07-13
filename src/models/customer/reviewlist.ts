export interface RootObject {
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
}

export interface Service {
  id: number;
  name: string;
  image: string;
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
