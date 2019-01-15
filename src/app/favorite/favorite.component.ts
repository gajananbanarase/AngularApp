import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() { }
   
  ngOnInit() {
  }

  onClick() {
    console.log("Angular App Success Event.");
  }

  b: string;
  //b: string;
}
