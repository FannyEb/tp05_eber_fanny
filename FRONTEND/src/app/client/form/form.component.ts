import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Client } from '../../core/model/client';
import { ClientService } from '../../core/service/client/client.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  client: Client = new Client();
  showInfo = false;

  clientForm = new FormGroup({
    lastName: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required, Validators.pattern('[0-9]{5}')]),
    phoneNumber: new FormControl('', [Validators.required]),
    login: new FormControl('', [Validators.required]),
    civility: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private notifier: NotifierService, private clientService: ClientService) { }

  validate() {
    // password and confirmPassword must be equals
    if (!this.client.isPasswordConfirm()) {
      this.notifier.notify('error', 'Les mots de passe ne sont pas identiques');
      return
    }
    if (!this.client.isAllCompleted()) {
      this.notifier.notify('error', 'Tous les champs doivent être remplis');
      return
    }

    this.clientService.post(this.client).subscribe((data: any) => {
      if (data.id) {
        this.notifier.notify('success', 'Le client a été ajouté avec succès');
        this.router.navigate(['/client', data.id]);
      }
    });
  }
}
