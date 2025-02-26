import {Component, OnInit} from '@angular/core';
import {ProjetService} from '../../services/projet.service';
import {Projet} from '../../models/projet';
import {ProjetItemComponent} from '../projet-item/projet-item.component';

@Component({
  selector: 'app-realisation-page',
  imports: [
    ProjetItemComponent
  ],
  templateUrl: './realisation-page.component.html',
  styleUrl: './realisation-page.component.scss'
})
export class RealisationPageComponent implements OnInit{

  projets! : Projet[];

  constructor(private projetService: ProjetService) {
  }

  ngOnInit(): void {
    this.projetService.initProjets();
    this.projets = this.projetService.getALlProjets();
  }

}
