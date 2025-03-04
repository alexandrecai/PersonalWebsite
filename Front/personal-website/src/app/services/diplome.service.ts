import { Injectable } from '@angular/core';
import {Projet} from '../models/projet';
import {Diplome} from '../models/diplome';

@Injectable({
  providedIn: 'root'
})
export class DiplomeService {

  private diplomes! : Diplome[];

  initDiplomes():void{
    this.diplomes = [
      new Diplome("Master Informatique Mobile Intelligente et Sécurisée","Université d'Orléans","/logo-univ-orleans.png","2022 - 2024"),
      new Diplome("Licence Informatique","Université d'Orléans","/logo-univ-orleans.png","2020 - 2022"),
      new Diplome("DUT Informatique","IUT d'Orléans","/logo-iut-orleans.jpg","2018 - 2020")
    ];
  }

  getALlDiplomes(): Diplome[]{
    return this.diplomes;
  }
}
