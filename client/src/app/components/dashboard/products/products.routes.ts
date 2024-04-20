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
        path: "add/stock",
        loadComponent: () => import("../../products-tab/stocks/stock/stock.component").then(x => x.StockComponent)
    },
    {
        path: "add/investor",
        loadComponent: () => import("../../products-tab/investors/investor/investor.component").then(x => x.InvestorComponent)
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
        path: "update/stock/:id",
        loadComponent: () => import("../../products-tab/stocks/stock/stock.component").then(x => x.StockComponent)
    },
    {
        path: "update/investor/:id",
        loadComponent: () => import("../../products-tab/investors/investor/investor.component").then(x => x.InvestorComponent)
    },
    {
        path: "",
        redirectTo: "lists",
        pathMatch: "full"
    }
]