  import { Injectable } from '@angular/core';
  import { Cliente,} from '../interface/animalregistro';
  import { Animal } from '../interface/lanimal';

  @Injectable({
    providedIn: 'root'
  })
  export class AnimalesregistroService {

    clientes!: Cliente[];


    constructor() {
      if (typeof localStorage !== 'undefined') {
        this.clientes = JSON.parse(localStorage.getItem("data") || '[]');
      } else {
        
        this.clientes = [];
      }

    }

    getClientes(){
      return this.clientes;
    }  
    getCitas(): Cliente[] {
      return this.clientes;
    }

    agregarCliente(cliente: Cliente){
      this.clientes.push(cliente);
      localStorage.setItem('data',JSON.stringify(this.clientes));
    }

    nuevoCliente(): Cliente{
      
      return{

        nombre: '',
        apellidos:'',
        telefono: '',
        correo: '',
        fechaCita: '',
        horaCita: '',
      };
    }

  }
