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
      icon: 'user'
    },
    {
      title: 'New Asset',
      url: 'asset',
      icon: 'list'
    },
    {
      title: 'List',
      url: 'list',
      icon: 'list'
    },
    {
      title: 'Pool',
      url: 'pool',
      icon: 'list'
    },
    {
      title: 'Notifications',
      url: 'notifications',
      icon: 'list'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  navigate(url: string) {
    this.router.navigateByUrl(`/menu/${url}`);
  }
}
