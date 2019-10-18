import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss']
})
export class MenuPage implements OnInit {
  public appPages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'New Employee',
      url: 'employee',
      icon: 'contacts'
    },
    {
      title: 'New Asset',
      url: 'asset',
      icon: 'cube'
    },
    {
      title: 'Pool',
      url: 'pool',
      icon: 'construct'
    },
    {
      title: 'Notifications',
      url: 'notifications',
      icon: 'chatboxes'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  navigate(url: string) {
    this.router.navigateByUrl(`/menu/${url}`);
  }
}
