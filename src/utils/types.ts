export type User = {
    id?: number;
    last_login?: string;
    is_superuser?: boolean;
    is_staff?: boolean;
    date_joined?: string;
    email: string;
    activation_code?: string;
    username?: string;
    first_name: string;
    last_name: string;
    avatar?: string;
    is_active?: boolean;
    is_seller?: boolean;
    is_seller_pending?: boolean;
    groups?: number[];
    user_permissions?: number[]
}

export type Article = {
    id?: number;
    title: string;
    owner: number;
    owner_email?: string;
    image?: string;
    body_preview?: string
}

export type Category = {
    slug?: string;
    name: string;
    photo?: string;
    description?: string;
    parent?: string
}

export type News = {
    id?: number;
    title: string;
    owner: number;
    owner_email?: string;
    is_seller_news?: boolean;
    image?: string;
    body_preview?: string
}

export type Order = {
    id?: string;
    status?: string;
    user?: string;
    products: OrderItem[];
    address: string;
    number: string;
    total_sum?: string;
    delivery_method: "pickup" | "courier";
    payment_method: "cash" | "bank_transfer" | "money_transfer" | "cash_on_delivery";
    delivery_address?: string;
    created_at?: string;
    updated_at?: string;
    comment: string;
    product: number[]
}

export type OrderItem = {
    product: number;
    quantity?: number;
    product_title?: string
}

export type Product = {
    id?: number;
    owner: number;
    owner_email?: string;
    category_name?: string;
    parent?: string;
    title: string;
    price: string;
    preview?: string
}

export type Rating = {
    id?: number;
    user?: string;
    rating: number;
    text?: string;
    created_at: string;
    product: number
}