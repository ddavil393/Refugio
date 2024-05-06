import { Routes } from '@angular/router';
import path from 'path';
import { AnimalesComponent } from './components/animales/animales.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { CitasregistrasComponent } from './components/citasregistras/citasregistras.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'citasregistradas', component: CitasregistrasComponent},
    {path: 'registrar', component: RegistrarComponent},
    {path: 'animales', component: AnimalesComponent},


    {path: '**', pathMatch: 'full', redirectTo:'home'}
];
