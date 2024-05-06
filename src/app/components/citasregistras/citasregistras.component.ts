import { Component } from '@angular/core';
import { Cliente } from '../../interface/animalregistro';
import { AnimalesregistroService } from '../../service/animalesregistro.service';

@Component({
  selector: 'app-citasregistras',
  standalone: true,
  imports: [],
  templateUrl: './citasregistras.component.html',
  styleUrl: './citasregistras.component.css'
})
export class CitasregistrasComponent {

  clientes!: Cliente[];
  citas: Cliente[] = [];
  constructor(private animalesregistroService: AnimalesregistroService){}

  ngOnInit(){
    this.clientes = this.animalesregistroService.getClientes();
  }

  getCitasPasadas(): Cliente[] {
    const fechaActual = new Date();
    return this.citas.filter(cita => {
      const fechaCita = new Date(cita.fechaCita + 'T' + cita.horaCita);
      return fechaCita < fechaActual;
    });
  }

  getCitasFuturas(): Cliente[] {
    const fechaActual = new Date();
    return this.citas.filter(cita => {
      const fechaCita = new Date(cita.fechaCita + 'T' + cita.horaCita);
      return fechaCita >= fechaActual;
    });
  }
  

}
