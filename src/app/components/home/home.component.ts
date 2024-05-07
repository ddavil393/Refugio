import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DomseguroPipe } from '../../domseguro.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,DomseguroPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
video:string="M8pNE23wP1A?si=mFGUTHVMYtRDEZTF"
}
