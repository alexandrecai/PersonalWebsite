import { Component } from '@angular/core';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';

import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-page',
  imports: [
    FormsModule,
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    MatLabel,
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

  onSubmitForm(contactForm: NgForm) {
    emailjs.send("service_45hjtq4", "template_opqi7fw", {...contactForm.value}, {
      publicKey: 'aJbao29nAOj2Dg4E1'
    }).then(()  => {
        console.log("Email sent")
      },
      (error) => {
        console.log('FAILED...', (error as EmailJSResponseStatus).text);
      },  )
  }
}
