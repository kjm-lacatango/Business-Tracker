import { Routes } from '@angular/router'

export const STORE_ROUTES: Routes = [
    {
        path: "list",
        loadComponent: () => import('./activities/activities.component').then(x => x.ActivitiesComponent)
    },
    {
        path: "add",
        loadComponent: () => import('./activity/activity.component').then(x => x.ActivityComponent)
    },
    {
        path: "update/:id",
        loadComponent: () => import('./activity/activity.component').then(x => x.ActivityComponent)
    },
    {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
    }
]