import {Component, Input} from '@angular/core';
import {Projet} from '../../models/projet';
import {NgIf, NgOptimizedImage, UpperCasePipe} from '@angular/common';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-projet-item',
  imports: [
    NgOptimizedImage,
    MatChipSet,
    MatChip,
    NgIf,
    MatIcon,
    UpperCasePipe
  ],
  templateUrl: './projet-item.component.html',
  styleUrl: './projet-item.component.scss'
})
export class ProjetItemComponent {

  arrowUp!: boolean;
  showPreview!: boolean;

  @Input() projet!: Projet;

  constructor() {
    this.showPreview = false;
  }

  clickShowPreview(){
    this.showPreview = !this.showPreview;
  }
}
