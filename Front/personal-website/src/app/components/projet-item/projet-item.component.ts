import {Component, Input} from '@angular/core';
import {Projet} from '../../models/projet';
import {NgOptimizedImage} from '@angular/common';
import {MatChip, MatChipListbox, MatChipSet} from '@angular/material/chips';

@Component({
  selector: 'app-projet-item',
  imports: [
    NgOptimizedImage,
    MatChipSet,
    MatChip,
  ],
  templateUrl: './projet-item.component.html',
  styleUrl: './projet-item.component.scss'
})
export class ProjetItemComponent {

  @Input() projet!: Projet;

}
