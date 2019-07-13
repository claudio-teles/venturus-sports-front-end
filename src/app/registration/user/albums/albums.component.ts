import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  album: any[];

  constructor() {}

  ngOnInit() {
    this.album = [];
    this.album.push({source:'../../../../../assets/icons/baseline_compare_arrows_black_18dp.png', alt:'arrows', title:'baseline_compare_arrows_black'});
    this.album.push({source:'../../../../../assets/icons/heartbeat.png', alt:'icone-coração', title:'hartbeat'});
    this.album.push({source:'../../../../../assets/icons/help.png', alt:'arrows', title:'baseline_compare_arrows_black'});
    this.album.push({source:'../../../../../assets/icons/home.png', alt:'arrows', title:'baseline_compare_arrows_black'});
    this.album.push({source:'../../../../../assets/icons/life-ring.png', alt:'arrows', title:'baseline_compare_arrows_black'});
    this.album.push({source:'../../../../../assets/icons/puzzle.png', alt:'arrows', title:'baseline_compare_arrows_black'});
    this.album.push({source:'../../../../../assets/icons/smile.png', alt:'arrows', title:'baseline_compare_arrows_black'});
    this.album.push({source:'../../../../../assets/icons/trophy.png', alt:'arrows', title:'baseline_compare_arrows_black'});
    this.album.push({source:'../../../../../assets/icons/user.png', alt:'arrows', title:'baseline_compare_arrows_black'});
  }

}
