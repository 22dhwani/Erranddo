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