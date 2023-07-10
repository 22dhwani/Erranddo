export interface RootObject {
  data: Service[];
  message: string;
  status: string;
}

export interface Service {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface Business {
  data: BusinessData[];
  message: string;
  status: string;
}

export interface BusinessData {
  id: number;
  user_id: number;
  name: string;
  image: string;
  description: string;
  created_at: string;
  updated_at: string;
  reviews_avg_rating: number;
  services: Service[];
}

export interface PostCode {
  data: PostCode[];
  message: string;
  status: string;
}

export interface PostCode {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Question {
  data: QuestionData[];
  next_page: string;
  message: string;
  status: string;
}

export interface QuestionData {
  id: number;
  title: string;
  service_id: number;
  answers: string[];
  created_at: string;
  updated_at: string;
}
