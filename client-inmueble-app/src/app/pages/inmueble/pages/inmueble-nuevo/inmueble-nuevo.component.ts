import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inmueble-nuevo',
  templateUrl: './inmueble-nuevo.component.html',
  styleUrls: ['./inmueble-nuevo.component.scss'],
})
export class InmuebleNuevoComponent implements OnInit {
  loading$!: Observable<boolean | null>;
  photoLoaded!: string;

  constructor() {}

  ngOnInit(): void {}

  registrarInmueble(form: NgForm): void {}

  onFilesChanged(url: any): void {
    if (url) {
      this.photoLoaded = url;
    }
  }
}
