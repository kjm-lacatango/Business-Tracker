import { Routes } from "@angular/router";


export const STORE_ROUTES: Routes = [
    {
        path: "home",
        loadComponent: () => import("./home/home.component").then(x => x.HomeComponent)
    },
    {
        path: "activities",
        loadComponent: () => import("../../pages/activities/activities.component").then(x => x.ActivitiesComponent),
        loadChildren: () => import("./activities/activities.routes").then(x => x.STORE_ROUTES)
        
    },
    {
        path: "profile",
        loadComponent: () => import("./profile/profile.component").then(x => x.ProfileComponent)
    },
    {
        path: "products",
        loadComponent: () => import("../../pages/products/products.component").then(x => x.ProductsComponent),
        loadChildren: () => import("./products/products.routes").then(x => x.STORE_ROUTES)
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    }
];