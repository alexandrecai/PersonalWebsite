import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {DiplomeService} from '../../services/diplome.service';
import {Diplome} from '../../models/diplome';
import {ExperienceService} from '../../services/experience.service';
import {Experience} from '../../models/experience';

@Component({
  selector: 'app-about-page',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent implements OnInit{

  diplomes! : Diplome[];
  experiences! : Experience[];

  constructor(private diplomeService: DiplomeService, private experienceService: ExperienceService) {
  }

  ngOnInit(): void {
    this.diplomeService.initDiplomes();
    this.diplomes = this.diplomeService.getALlDiplomes();

    this.experienceService.initExperience();
    this.experiences = this.experienceService.getALlExperiences();
  }
}
