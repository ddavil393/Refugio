import { Routes } from '@angular/router';
import path from 'path';
import { AnimalesComponent } from './components/animales/animales.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'animales', component: AnimalesComponent},


    {path: '**', pathMatch: 'full', redirectTo:'home'}
];
