import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../core/service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private loginService: LoginService) { }

  onSubmit() {
    this.loginService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      (data) => {
        localStorage.setItem('username', data.login);
      }
    );
  }


}
