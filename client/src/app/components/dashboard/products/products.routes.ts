import { Routes } from '@angular/router'

export const STORE_ROUTES: Routes = [
    {
        path: "list",
        loadComponent: () => import("./products/products.component").then(x => x.ProductsComponent)
    },
    {
        path: "add",
        loadComponent: () => import("./product/product.component").then(x => x.ProductComponent)
    },
    {
        path: "update/:id",
        loadComponent: () => import("./product/product.component").then(x => x.ProductComponent)
    },
    {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
    }
]