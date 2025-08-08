import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store';
import * as fromList from '../../store/save';

@Component({
  selector: 'app-inmueble-nuevo',
  templateUrl: './inmueble-nuevo.component.html',
  styleUrls: ['./inmueble-nuevo.component.scss'],
})
export class InmuebleNuevoComponent implements OnInit {
  loading$!: Observable<boolean | null>;
  photoLoaded!: string;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {}

  registrarInmueble(form: NgForm): void {
    if (form.valid) {
      this.loading$ = this.store.pipe(select(fromList.getLoading));

      const InmuebleCreateRequest: fromList.InmuebleCreateRequest = {
        nombre: form.value.nombre,
        picture: this.photoLoaded,
        precio: form.value.precio,
        direccion: form.value.direccion,
      };
      this.store.dispatch(new fromList.Create(InmuebleCreateRequest));
    }
  }

  onFilesChanged(url: any): void {
    if (url) {
      this.photoLoaded = url;
    }
  }
}
