import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'navbar', component: NavbarComponent},
    { path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent}
];
