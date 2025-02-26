import { Injectable } from '@angular/core';
import {Projet} from '../models/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private projets! : Projet[];

  initProjets():void{
      this.projets = [
        new Projet(
          "test",
          "je suis un test",
          "http://image",
          ["marcel","thierry"],
          ["java","spring"]
        )
      ];
  }

  getALlProjets(): Projet[]{
    return this.projets;
  }


}
