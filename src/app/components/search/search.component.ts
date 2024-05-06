import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnanimalComponent } from '../unanimal/unanimal.component';
import { Animal } from '../../interface/lanimal';
import { AnimalesService } from '../../service/animales.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [UnanimalComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  nameh:string="";
  indice:number=0;

  mianimal:Animal={
    id: 0,
    name: "",
    age: "",
    color: "",
    race: "",
    time_at_the_shelter: "",
    description: "",
    image: "",
  };

  constructor(private animalService: AnimalesService,private activatedRouted:ActivatedRoute){
    this.activatedRouted.params.subscribe(params => {
      this.nameh=params['nameh'];
      this.indice=this.animalService.searchUnHeroe(this.nameh);
      console.log(this.indice);

      if(this.indice != -1){
        this.mianimal=this.animalService.getUnHeroe(this.indice);
      }

    });
    
  }

}



