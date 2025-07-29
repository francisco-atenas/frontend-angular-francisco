import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NotificationService } from '@app/services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showSpinner = false;
  title = 'cli-inmueble-app';

  constructor(
    private fs: AngularFirestore,
    private notification: NotificationService
  ) {
    // Example of using AngularFirestore
    // this.fs.collection('test').valueChanges().subscribe(data => {
    //   console.log('Data from Firestore:', data);
    // });
  }
  ngOnInit(): void {
    // Fetch initial data from Firestore on component initialization
    this.fs
      .collection('test')
      .stateChanges()
      .subscribe((personas) => {
        console.log(
          'Initial data from Firestore (ngOnInit):',
          personas.map((p) => p.payload.doc.data())
        );
      });
  }

  onToggleSpinner(): void {
    this.showSpinner = !this.showSpinner;
  }

  onFilesChanged(urls: string | string[]): void {
    console.log('Files changed:', urls);
    // Handle the files URLs as needed
  }

  onSuccess(): void {
    this.notification.success('El procedimiento fue realizado con éxito');
  }

  onError(): void {
    this.notification.error('Ocurrió un error al realizar el procedimiento');
  }
}
