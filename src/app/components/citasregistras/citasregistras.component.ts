import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../interface/animalregistro';
import { AnimalesregistroService } from '../../service/animalesregistro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-citasregistras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './citasregistras.component.html',
  styleUrl: './citasregistras.component.css'
})
export class CitasregistrasComponent {

  clientes!: Cliente[];
  citasPasadas: Cliente[] = [];
  citasFuturas: Cliente[] = [];

  constructor(private animalesregistroService: AnimalesregistroService){}

  ngOnInit(){
    this.clientes = this.animalesregistroService.getClientes();
    this.citasPasadas = this.getCitasPasadas();
    this.citasFuturas = this.getCitasFuturas();
  }

  getCitasPasadas(): Cliente[] {
    const fechaActual = new Date();
    return this.clientes.filter(cita => {
      const fechaCita = new Date(cita.fechaCita + 'T' + cita.horaCita);
      return fechaCita < fechaActual;
    });
  }

  getCitasFuturas(): Cliente[] {
    const fechaActual = new Date();
    return this.clientes.filter(cita => {
      const fechaCita = new Date(cita.fechaCita + 'T' + cita.horaCita);
      return fechaCita >= fechaActual;
    });
  }
}