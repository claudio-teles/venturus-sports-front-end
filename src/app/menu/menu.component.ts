import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  paginas: MenuItem[];
  home: MenuItem;

  constructor() {}

  ngOnInit() {
    this.paginas = [
      {label: 'Home', url: ''},
      {label: 'Register User', url: 'user'},
      {label: 'Posts', url: 'posts'},
      {label: 'Albums', url: 'albums'},
      {label: 'Photos', url: 'photos'}
    ];

    this.home = {icon: 'pi pi-home'};
  }

}
