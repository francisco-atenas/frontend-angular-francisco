import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  registrarUsuario(form: NgForm) {
    if (form.valid) {
      // Lógica para registrar al usuario
      console.log('Usuario registrado:', form.value);
    }
  }
}
