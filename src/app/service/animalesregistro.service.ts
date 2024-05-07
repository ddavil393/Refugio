  import { Injectable } from '@angular/core';
  import { Cliente,} from '../interface/animalregistro';
  import { Animal } from '../interface/lanimal';

  @Injectable({
    providedIn: 'root'
  })
  export class AnimalesregistroService {

    clientes!: Cliente[];
    animalid!: Animal[];


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
      this.clientes.push(cliente)
      localStorage.setItem('data',JSON.stringify(this.clientes));
    }

    guardarAnimal(animalid:Animal){
      return this.animalid
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
