import { Component } from '@angular/core';
import { AnimalesregistroService} from '../../service/animalesregistro.service'
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../interface/animalregistro';
import { Animal } from '../../interface/lanimal';
import { AnimalesService } from '../../service/animales.service';
import { ActivatedRoute } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [FormsModule, MatNativeDateModule, MatFormFieldModule,MatInputModule, MatDatepickerModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})

export class RegistrarComponent {
  cliente!:Cliente;
  citasPasadas: Cliente[] = [];
  animal!:Animal;
  animalID!: number;

  constructor(
    private animalesregistroService: AnimalesregistroService, 
    public  animalService: AnimalesService, 
    public activatedRoute: ActivatedRoute
  ){
    this.activatedRoute.params.subscribe(params => {
      this.animal=animalService.getUnAnimal(params ['id']);
      this.animalID = params['id'];
    })
  }

  ngOnInit(){
    this.cliente = this.animalesregistroService.nuevoCliente();
  
  }

  nuevoCliente(): void {

    const citasExistentes = this.animalesregistroService.getClientes().filter(
        cliente => cliente.fechaCita === this.cliente.fechaCita && cliente.horaCita === this.cliente.horaCita
    );

    const nuevaFechaHora = new Date(this.cliente.fechaCita + 'T' + this.cliente.horaCita);
    const fechaActual = new Date();
    if (nuevaFechaHora < fechaActual) {
        alert('Lo sentimos, no puedes registrar una cita en una fecha que ya ha pasado.');
        return;
    }

    const citaOcupada = citasExistentes.some(cliente => {
        const fechaHoraExistente = new Date(cliente.fechaCita + 'T' + cliente.horaCita);
        return fechaHoraExistente.getTime() === nuevaFechaHora.getTime();
    });

    if (citaOcupada) {
        alert('Lo sentimos, esta fecha y hora ya están ocupadas. Por favor, elige otra.');
    } else {
      
        this.animalesregistroService.agregarCliente(this.cliente);
        this.cliente = this.animalesregistroService.nuevoCliente();
        alert('¡Cita registrada exitosamente!');
    }

    
}
}
