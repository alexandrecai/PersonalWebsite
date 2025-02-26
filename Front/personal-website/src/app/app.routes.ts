import { Routes } from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {ContactPageComponent} from './components/contact-page/contact-page.component';
import {RealisationPageComponent} from './components/realisation-page/realisation-page.component';
import {AboutPageComponent} from './components/about-page/about-page.component';

export const routes: Routes = [
  { path : 'contact', component : ContactPageComponent},
  { path : 'realisation', component : RealisationPageComponent},
  { path : 'about', component : AboutPageComponent},
  { path : '', component : MainPageComponent}
];
