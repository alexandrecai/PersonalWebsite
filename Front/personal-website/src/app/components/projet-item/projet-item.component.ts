import {Component, Input} from '@angular/core';
import {Projet} from '../../models/projet';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {MatChip, MatChipListbox, MatChipSet} from '@angular/material/chips';
import {MatExpansionPanel, MatExpansionPanelTitle, MatExpansionPanelHeader} from '@angular/material/expansion';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-projet-item',
  imports: [
    NgOptimizedImage,
    MatChipSet,
    MatChip,
    NgIf,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelHeader,
    MatIcon
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
