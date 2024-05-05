import { Component } from '@angular/core';
import { AnimalesService } from '../../service/animales.service';
import { Animal } from '../../interface/lanimal';

@Component({
  selector: 'app-animales',
  standalone: true,
  imports: [],
  templateUrl: './animales.component.html',
  styleUrl: './animales.component.css'
})
export class AnimalesComponent {
   array: Animal[] = [];

  constructor(public animalService: AnimalesService) {}

  ngOnInit() {
    console.log("En este instante el componente ha cargado");
    this.recuperarDatos();
  }

  recuperarDatos(): void {
    console.log("entre");
    this.animalService.retornar().subscribe({
      next: this.succesRequest.bind(this),
      error: (err) => { console.log(err) }
    });
  }

  succesRequest(data: any): void {
    console.log("data", data);
    this.array = data.products;
    console.log("array", this.array);
  }
}
