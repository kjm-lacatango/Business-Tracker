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
    type: string;
    price?: number;
    date: Date;
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
    date: Date;
    noOfCups: number;
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
    designation: string;
}