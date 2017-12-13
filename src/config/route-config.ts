import { Routes } from "@angular/router";
import { UserProfileComponent } from "../app/user/user-profile.component";
import { AuthGuard } from "../app/core/services/auth.guard";
import { HomePageComponent } from "../app/home/home-page.component";

export const routeConfig: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'}
];