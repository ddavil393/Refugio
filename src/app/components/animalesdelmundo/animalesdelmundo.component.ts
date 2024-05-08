import { Component } from '@angular/core';
import { PipeanimalService } from '../../service/pipeanimal.service';
import { Animalesn } from '../../interface/animalesn';

@Component({
  selector: 'app-animalesdelmundo',
  standalone: true,
  imports: [],
  templateUrl: './animalesdelmundo.component.html',
  styleUrl: './animalesdelmundo.component.css'
})
export class AnimalesdelmundoComponent {
  array:Animalesn [] = [];

	constructor (public pipeanimalService: PipeanimalService){}

	ngOnInit(){
		
	console.log("En este instante el componente ha cargado");
	this.recuperarDatos();
	
	}

	recuperarDatos():void{
	
	console.log("entre");

	this.pipeanimalService.retornar().subscribe({ 
    next: this.succesRequest.bind(this),
    error: (err) => {console.log(err)}
   });
	
	}//fin de recuperar datos

  succesRequest(data:any):void{
    console.log("data",data);
    this.array = data.products;
    console.log("array",this.array);
  }

}
