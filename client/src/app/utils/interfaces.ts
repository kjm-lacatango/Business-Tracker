export interface InputValidations {
    error: string;
    message: string;
}

export interface Employee {
    id: string;
    isChecked: boolean;
    business: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    age: number;
    sex: string;
    startedAt: Date;
    position: string;
    salary: number;
}

export interface Product {
    id: string;
    isChecked: boolean;
    product: string;
    name: string;
    item: string;
    price?: number;
    updatedOn: Date;
    soldOut: number;
    sales: number;
    notes?: string;
}

export interface Activity {
    id: string;
    isChecked: boolean;
    firstName: string;
    middleName?: string;
    lastName: string;
    updatedOn: Date;
    soldOut: number;
    sales: number;
    product: string;
    note?: string;
}

export interface User {
    id: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
    business: string;
    designation: string;
    profile?: string;
    note?: string;
}

export interface ApiResponse<T> {
    message: string;
    data: T[];
    token: string;
}

export interface Message {
    status: string;
    text: string;
    show: boolean;
}

export interface Popup {
    title: string;
    data: string;
}

type UserEventError = "GetUserError" | "AddUserError";
export type UserEvent = "GetUser" | "AddUser" | UserEventError;

type ActivityEventError = "GetActivitiesError" | "AddActivityError";
export type ActivityEvent = "GetActivities" | "AddActivity" | ActivityEventError;

type ProductEventError = "GetProductsError" | "AddProductError";
export type ProductEvent = "GetProducts" | "AddProduct" | ProductEventError;
