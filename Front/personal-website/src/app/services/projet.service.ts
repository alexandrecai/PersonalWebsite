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
          "/logo_nobackground.png",
          ["Alexandre Cailloux"],
          ["Angular","Bootstrap"],
          "https://github.com/alexandrecai/PersonalWebsite",
          "/previews/personal_website.png"
        ),
        new Projet(
          "Site web pour une pizzeria",
          "DiLL est un défi qui met en relation des étudiants de l’Université d’Orléans, de l’Université de Tours et de l’INSA Centre-Val de Loire avec des entreprises, des associations, des collectivités et des institutions de la région Centre-Val de Loire. Chaque organisation propose un projet sur lequel les étudiants travaillent en groupe.\n" +
          "\n" +
          "Mon groupe a été chargé de créer un site web et une application mobile pour une pizzeria locale. Le site permet aux utilisateurs de passer des commandes en ligne, tandis que l’application mobile est utilisée par le personnel de cuisine pour afficher les commandes.\n" +
          "\n" +
          " - Développement du backend avec Spring et MongoDB\n" +
          "\n" +
          " - Création du frontend web avec Angular\n" +
          "\n" +
          " - Mise en place d’un environnement Docker\n" +
          "\n" +
          " - Communication avec le client pour répondre à ses besoins",
          "/petitesaisonlogo.jpg",
          ["Alexandre Cailloux","Arnaud Girard","Matthieu Bonbon","Fatoumata Barry"],
          ["Java","Spring","Angular","MongoDB"],
          "",
          "/previews/petite_saison_website.png"
        ),
        new Projet(
          "Amélioration d'un projet en réalité virtuelle",
          "DiLL is a challenge that connects students from the University of Orléans, the University of Tours, and INSA CVL with companies, associations, communities, and institutions from the Centre-Val de Loire region. Each organization submits a project that students work on in groups.",
          "/unity.png",
          ["Alexandre Cailloux","Matthieu Bonbon","Julien Oger","Ahmet Khadir","Enzo Stead","Thomas Deblock"],
          ["C#","Unity","Réalité  Virtuelle","Blender"]
        )
      ];
  }

  getALlProjets(): Projet[]{
    return this.projets;
  }


}
