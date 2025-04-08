import { Component } from '@angular/core';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {NgToastModule, NgToastService, ToasterPosition} from "ng-angular-popup";


import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-page',
  imports: [
    FormsModule,
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    MatLabel,
    NgToastModule,
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

  constructor(private toast: NgToastService) {
  }

  onSubmitForm(contactForm: NgForm) {
    emailjs.send("service_45hjtq4", "template_opqi7fw", {...contactForm.value}, {
      publicKey: 'aJbao29nAOj2Dg4E1'
    }).then(()  => {
        console.log("Email sent")
        contactForm.resetForm("0")
        this.toast.success("L'email a bien été envoyé","", 5000);
      },
      (error) => {
        console.log('FAILED...', (error as EmailJSResponseStatus).text);
        this.toast.danger("Une erreur est survenue lors de l'envoi de l'email","", 5000);
      },
      )
  }

  protected readonly ToasterPosition = ToasterPosition;
}
