export interface RootObject {
    data: Business[];
    next_page: string;
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
    services: Service[];
}

export interface Service {
    id: number;
    name: string;
    image: string;
    created_at: string;
    updated_at: string;
}