import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesUploadComponent } from './files-upload.component';
import { FilesUpdloadDirective } from './files-updload.directive';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [FilesUploadComponent, FilesUpdloadDirective],
  imports: [CommonModule, MatDialogModule],
  exports: [FilesUploadComponent, FilesUpdloadDirective],
})
export class FilesUploadModule {}
