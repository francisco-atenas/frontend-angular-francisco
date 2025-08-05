import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-entity-photo',
  templateUrl: './entity-photo.component.html',
  styleUrls: ['./entity-photo.component.scss'],
})
export class EntityPhotoComponent implements OnInit {
  @Input() photoURL!: string;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  get savePhotoURL(): SafeStyle | null {
    return this.photoURL
      ? this.sanitizer.bypassSecurityTrustStyle(`url(${this.photoURL})`)
      : null;
  }
}
