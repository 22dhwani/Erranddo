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
    is_verified: string;
    firebase_ids?: any;
    created_at: string;
    updated_at: string;
}