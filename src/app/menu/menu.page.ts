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
      title: 'List',
      url: 'list',
      icon: 'list'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  navigate(url: string) {
    this.router.navigateByUrl(`/menu/${url}`);
  }
}
