import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(protected formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.nonNullable.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onLoggedin(e: Event) {
    console.log('event login');
    console.log('form: ', this.loginForm.value);
  }
}
