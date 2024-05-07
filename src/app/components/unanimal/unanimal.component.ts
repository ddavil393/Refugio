import { Component,Input } from '@angular/core';
import { ActivatedRoute,RouterLink,RouterModule } from '@angular/router';
import { AnimalesService } from '../../service/animales.service';
import { Animal } from '../../interface/lanimal';

@Component({
  selector: 'app-unanimal',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './unanimal.component.html',
  styleUrl: './unanimal.component.css'
})
export class UnanimalComponent {

  animalID: number = 0;
  @Input()animal!:Animal;
  constructor(public  animalService: AnimalesService, public activatedRoute: ActivatedRoute){

    this.activatedRoute.params.subscribe(params => {
      this.animal=animalService.getUnAnimal(params ['id']);
      this.animalID = params['id'];
    })
  }

}
