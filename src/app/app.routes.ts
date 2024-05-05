import { Routes } from '@angular/router';
import path from 'path';
import { AnimalesComponent } from './animales/animales.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroe', component: AnimalesComponent},


    {path: '**', pathMatch: 'full', redirectTo:'home'}
];
