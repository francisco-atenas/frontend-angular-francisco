import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesUploadComponent } from './files-upload.component';
import { FilesUploadDirective } from './files-updload.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { DropZoneDirective } from './directives/drop-zone/drop-zone.directive';

@NgModule({
  declarations: [FilesUploadComponent, FilesUploadDirective, DropZoneDirective],
  imports: [CommonModule, MatDialogModule],
  exports: [FilesUploadDirective],
})
export class FilesUploadModule {}
