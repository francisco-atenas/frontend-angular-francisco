import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cli-inmueble-app';

  constructor(private fs: AngularFirestore) {
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
}
