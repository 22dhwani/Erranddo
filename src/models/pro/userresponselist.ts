export interface RootObject {
    data: UserResponseList[];
    total: number;
    last_page: number;
    next_page: string;
    message: string;
    status: string;
}

export interface UserResponseList {
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
    intrests_count: number;
    user: User;
    service: Service;
    user_bussiness: Userbussiness;
    answers: any[];
    postcode: Postcode;
    intrests: any[];
    leads: Lead[];
}

export interface Lead {
    id: number;
    user_request_id: number;
    user_business_id: number;
    customer_id: number;
    credits: string;
    is_outright: number;
    is_credit_paid: number;
    created_at: string;
    updated_at: string;
}

export interface Postcode {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Userbussiness {
    id: number;
    user_id: number;
    name: string;
    image: string;
    description: string;
    email?: any;
    mobile_number?: any;
    website_url?: any;
    facebook_url?: any;
    twitter_url?: any;
    instagram_url?: any;
    created_at: string;
    updated_at: string;
    services: Service[];
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