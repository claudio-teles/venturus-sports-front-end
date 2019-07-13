import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  val1: string;

  sum: any;
  mon: any;
  tue: any;
  wed: any;
  thu: any;
  fri: any;
  sat: any;

  rides2: string = '';

  users: any[] = [
    {
      userName: '',
      name: '',
      email: '',
      city: '',
      rideInGroup: null,
      dayOfWeek: '',
      posts: null,
      albums: null,
      photos: null
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
