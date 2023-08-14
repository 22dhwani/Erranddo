export interface RootObject {
  data: NotesList[];
  message: string;
  status: string;
}

export interface NotesList {
  id: number;
  user_id: number;
  user_request_id: number;
  note: string;
  created_at: string;
  updated_at: string;
  user: User;
  user_request: Userrequest;
}

export interface Userrequest {
  id: number;
  user_id: number;
  service_id: number;
  business_id: number;
  postcode_id: number;
  file: string;
  comment: string;
  status: string;
  is_closed: string;
  price: string;
  price_type: string;
  close_answer: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: number;
  full_name: string;
  mobile_number?: any;
  address?: any;
  city?: any;
  postcode_id?: any;
  bio?: any;
  email: string;
  is_email_verified: string;
  is_mobile_verified: string;
  img_avatar?: any;
  available_credits: string;
  created_at: string;
  updated_at: string;
}
