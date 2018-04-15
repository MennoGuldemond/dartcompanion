import { Routes } from "@angular/router";
import { UserProfileComponent } from "../app/user/user-profile.component";
import { AuthGuard } from "../app/core/services/auth.guard";
import { HomePageComponent } from "../app/home/home-page.component";
import { GamesComponent } from "../app/games/games.component";

export const routeConfig: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'games', component: GamesComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'}
];