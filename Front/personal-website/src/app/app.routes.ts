import { Routes } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';

export const routes: Routes = [
  { path : 'contact', component : ContactPageComponent},
  { path : '', component : MainPageComponent}
];
