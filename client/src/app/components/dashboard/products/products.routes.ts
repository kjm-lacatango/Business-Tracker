import { Routes } from '@angular/router'

export const STORE_ROUTES: Routes = [
    {
        path: "lists",
        loadComponent: () => import("./products/products.component").then(x => x.ProductsComponent)
    },
    {
        path: "add/product",
        loadComponent: () => import("../../products-tab/products/product/product.component").then(x => x.ProductComponent)
    },
    {
        path: "add/employee",
        loadComponent: () => import("../../products-tab/employees/employee/employee.component").then(x => x.EmployeeComponent)
    },
    {
        path: "update/product/:id",
        loadComponent: () => import("../../products-tab/products/product/product.component").then(x => x.ProductComponent)
    },
    {
        path: "update/employee/:id",
        loadComponent: () => import("../../products-tab/employees/employee/employee.component").then(x => x.EmployeeComponent)
    },
    {
        path: "",
        redirectTo: "lists",
        pathMatch: "full"
    }
]