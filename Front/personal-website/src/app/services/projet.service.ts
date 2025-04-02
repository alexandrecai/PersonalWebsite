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
          "Site web personnel",
          "Création de mon site web personnel servant de vitrine pour mes réalisations. Ce site, sur lequel vous naviguez actuellement, a été entièrement développé avec Angular. Il intègre la bibliothèque EmailJS, permettant de me contacter facilement par email.",
          "/logo.jpeg",
          ["Alexandre Cailloux"],
          ["Angular","Bootstrap"],
          "https://github.com/alexandrecai/PersonalWebsite"
        ),
        new Projet(
          "Site web pour une pizzeria",
          "DiLL is a challenge that connects students from the University of Orléans, the University of Tours, and INSA CVL with companies, associations, communities, and institutions from the Centre-Val de Loire region. Each organization submits a project that students work on in groups.",
          "/petitesaisonlogo.jpg",
          ["Alexandre Cailloux","Arnaud Girard","Matthieu Bonbon","Fatoumata Barry"],
          ["Java","Spring","Angular","MongoDB"]
        )
      ];
  }

  getALlProjets(): Projet[]{
    return this.projets;
  }


}
