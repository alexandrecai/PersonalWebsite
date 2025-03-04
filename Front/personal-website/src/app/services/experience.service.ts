import { Injectable } from '@angular/core';
import {Diplome} from '../models/diplome';
import {Experience} from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private experiences! : Experience[];

  initExperience():void{
    this.experiences = [
      new Experience("Stagiaire développeur informaticien","Arondor, Orléans","/logo-arondor.jpg","Avril 2024 - Septembre 2024"),
      new Experience("Stagiaire développeur logiciel","Arondor, Orléans","/logo-arondor.jpg","Avril 2022 - Juillet 2022")
    ];
  }

  getALlExperiences(): Experience[]{
    return this.experiences;
  }
}
