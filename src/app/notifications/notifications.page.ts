import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss']
})
export class NotificationsPage implements OnInit {
  dummyNotifications = [
    { title: 'Accepted', message: 'sdsadsahdsajhd' },
    { title: 'Accepted', message: 'sdsadsahdsajhd' },
    { title: 'Accepted', message: 'sdsadsahdsajhd' },
    { title: 'Accepted', message: 'sdsadsahdsajhd' },
    { title: 'Accepted', message: 'sdsadsahdsajhd' }
  ];
  constructor() {}

  ngOnInit() {}
}
