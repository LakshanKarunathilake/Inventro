import { Component, OnInit, Input } from '@angular/core';
import { BookAsset } from 'src/models/BookAsset';
import { BreakDown } from 'src/models/BreakDown';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  constructor() {}
  @Input() title: string;
  @Input() message: string;
  @Input() type: string;
  @Input() booking: BookAsset;
  @Input() damage: BreakDown;

  ngOnInit() {}
}
