export interface UserData {
  token: string;
  data: UserData;
  message: string;
  status: string;
}

export interface UserData {
  id: number;
  full_name: string;
  role: string;
  mobile_number?: any;
  address1?: any;
  address2?: any;
  city?: any;
  postcode_id?: any;
  bio?: any;
  otp?: any;
  email: string;
  img_avatar?: any;
  is_email_verified: number;
  is_mobile_verified: number;
  firebase_ids?: any;
  created_at: string;
  updated_at: string;
}

export interface OtpValues {
  mobile_number: string;
  email: string;
}

export interface SendOtp {
  message: string;
  status: string;
}

export interface VerifyOtp {
  token: string;
  data: UserData;
  message: string;
  status: string;
}

export interface RegisterUser {
  data: Data;
  message: string;
  status: string;
}

export interface Data {
  user: UserData;
  user_requests: Userrequests;
}

export interface Userrequests {
  id: number;
  user_id: number;
  service_id?: any;
  business_id?: any;
  postcode_id?: any;
  file?: any;
  comment?: any;
  status: string;
  created_at: string;
  updated_at: string;

  service?: any;
  answers: any[];
  user_bussiness?: any;
  postcode?: any;
}
