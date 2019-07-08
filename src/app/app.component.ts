import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'
import { DatabaseService } from './services/database.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fireworld';
  constructor(private afs: AngularFirestore, private db: DatabaseService) {
    this.db.getData().subscribe(data => {
      console.log(data);
    })
  }
}





