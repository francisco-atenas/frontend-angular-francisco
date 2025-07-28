import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss'],
})
export class FilesUploadComponent implements OnInit {
  isHovering: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }
}
