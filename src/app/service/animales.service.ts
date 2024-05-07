import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs'
import { Animal } from '../interface/lanimal';
import { ANIMAL } from '../interface/misanimales';
import { raceInit } from 'rxjs/internal/observable/race';



@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  urlAPI:string="https://homework.free.beeceptor.com/";

  // constructor(private http: HttpClient){}

  // retornar(){
  //    return this.http.get(this.urlAPI).pipe(take(1));
  // }

  private animal: Animal[]=ANIMAL;

  constructor() { }

  getAnimal(): Animal[] {
    return this.animal;
  }

  getUnAnimal(posicion:number):Animal{
    return this.animal[posicion];
  }

  searchUnAnimal(nameanimal:string):number{
    let index = this.animal.findIndex(p=> p.name=== nameanimal);
    return index;
  }
  
}