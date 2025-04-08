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
      new Experience("Stagiaire développeur informaticien","Arondor, Orléans","/logo-arondor.jpg","Avril 2024 - Septembre 2024"," •  Développement de programmes avec Springboot\n" +
        " •  Mise en place d’un environnement Docker\n" +
        " •  Écriture de scripts JavaScript\n" +
        " •  Résolution de tickets Jira pour l’application ABBYY FlexiCapture (RAD / LAD / OCR)\n" +
        " •  Communication avec la clientèle"
      ),
      new Experience("Stagiaire développeur logiciel","Arondor, Orléans","/logo-arondor.jpg","Avril 2022 - Juillet 2022"," •  Découverte d’un système de Gestion Electronique de Documents (GED)\n" +
        " •  Création d’un script Powershell\n" +
        " •  Mise à jour d’un formulaire de tests automatisés en utilisant Puppeteer\n" +
        " •  Réalisation de programmes avec Java et Springboot"
      )
    ];
  }

  getALlExperiences(): Experience[]{
    return this.experiences;
  }
}
