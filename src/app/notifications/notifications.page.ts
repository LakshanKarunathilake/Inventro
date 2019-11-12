import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakDown } from 'src/models/BreakDown';
import { BookAsset } from 'src/models/BookAsset';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss']
})
export class NotificationsPage implements OnInit {
  breakDownRecords: Observable<BreakDown[]>;
  bookings: Observable<BookAsset[]>;
  constructor(private afs: AngularFirestore) {
    this.breakDownRecords = this.afs
      .collection<BreakDown>('breakDown')
      .valueChanges();
    this.bookings = this.afs
      .collection<BookAsset>('BookAssetNotification')
      .valueChanges()
      .pipe(
        map(val => {
          console.log('val', val);
          return val;
        })
      );
  }

  ngOnInit() {}
}
