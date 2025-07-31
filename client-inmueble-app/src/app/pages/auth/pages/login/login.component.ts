import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  loginUsuario(form: NgForm): void {
    if (form.valid) {
      const email = form.value.email;
      const password = form.value.password;
      // Aquí puedes realizar la lógica de inicio de sesión
    }
  }
}
