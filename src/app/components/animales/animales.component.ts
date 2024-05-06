import { Component } from '@angular/core';
import { AnimalesService } from '../../service/animales.service';
import { Animal } from '../../interface/lanimal';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-animales',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './animales.component.html',
  styleUrl: './animales.component.css'
})
export class AnimalesComponent {
  //  array: Animal[] = [];

  // constructor(public animalService: AnimalesService) {}

  // ngOnInit():void {
  //   console.log("En este instante el componente ha cargado");
  //   this.recuperarDatos();
  // }

  // recuperarDatos(): void {
  //   console.log("entre");
  //   this.animalService.retornar().subscribe({
  //     next: this.succesRequest.bind(this),
  //     error: (err) => { console.log(err) }
  //   });
  // }

  // succesRequest(data: any): void {
  //   console.log("data", data);
  //   this.array = data.products;
  //   console.log("array", this.array);
  // }

  misanimales:Animal[]=[];

  constructor(public animalService: AnimalesService){
    console.log("Constructor de animales");
  }

  ngOnInit():void{
    console.log("ngOnInit de animales");
    this.misanimales=this.animalService.getAnimal();
    console.log(this.misanimales);
  }
}
