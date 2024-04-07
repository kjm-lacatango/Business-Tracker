import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "login",
        loadComponent: () => import("./pages/login/login.component").then(x => x.LoginComponent)
    },
    {
        path: "dashboard",
        loadComponent: () => import("./pages/dashboard/dashboard.component").then(x => x.DashboardComponent),
        loadChildren: () => import("./components/dashboard/dashboard.routes").then(x => x.STORE_ROUTES)
    },
    {
        path: "**",
        redirectTo: "dashboard",
        pathMatch: "full"
    }
];
