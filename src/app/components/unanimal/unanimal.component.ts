import { Component,Input } from '@angular/core';
import { ActivatedRoute,RouterModule } from '@angular/router';
import { AnimalesService } from '../../service/animales.service';
import { Animal } from '../../interface/lanimal';

@Component({
  selector: 'app-unanimal',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './unanimal.component.html',
  styleUrl: './unanimal.component.css'
})
export class UnanimalComponent {

  @Input()animal!:Animal;
  constructor(public  animalService: AnimalesService, public activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe(params => {
      this.animal=animalService.getUnAnimal(params ['id']);
    })
  }

}
