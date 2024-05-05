import { Component } from '@angular/core';
import { RouterModule, RouterOutlet} from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalesComponent } from './components/animales/animales.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, HomeComponent, RouterOutlet, AnimalesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Refugio';
}
