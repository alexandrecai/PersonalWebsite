import {Component, Input} from '@angular/core';
import {Projet} from '../../models/projet';

@Component({
  selector: 'app-projet-item',
  imports: [],
  templateUrl: './projet-item.component.html',
  styleUrl: './projet-item.component.scss'
})
export class ProjetItemComponent {

  @Input() projet!: Projet;

}
