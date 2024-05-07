import { Component } from '@angular/core';
import { Cliente,} from '../../interface/animalregistro';
import { AnimalesregistroService} from '../../service/animalesregistro.service'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  cliente!:Cliente;
  citasPasadas: Cliente[] = [];


  constructor(private animalesregistroService: AnimalesregistroService){}

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
        alert('¡Cliente registrado exitosamente!');
    }

    
}
}
