import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/Authenticate/authenticate.service';

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
      title: 'All Users',
      url: 'allUsers',
      icon: 'ribbon'
    },
    {
      title: 'Notifications',
      url: 'notifications',
      icon: 'chatboxes'
    },
    {
      title: 'Requests',
      url: 'requests',
      icon: 'cart'
    }
  ];

  constructor(private router: Router, private auth: AuthenticateService) {}

  ngOnInit() {}

  navigate(url: string) {
    this.router.navigateByUrl(`/menu/${url}`);
  }

  logoutUser = () => {
    this.auth.logoutUser();
    this.router.navigateByUrl(`/login`);
  };
}
