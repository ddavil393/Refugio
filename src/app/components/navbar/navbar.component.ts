import { Component } from '@angular/core';
import { Router,RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router:Router){ }

  buscarUnAnimal(name:string){
    this.router.navigate(['/buscar',name]);
  }
}
