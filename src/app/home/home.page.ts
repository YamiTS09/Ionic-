import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit{
  constructor() {}
  ngOnInit() {

    let numero=0;

    numero = 5;
    numero = 7;
    numero = numero * 2;
    numero = numero /3;

    console.log("hi");
    console.log("my");
    console.log("friends");
    console.log("JA");
    console.log("JA");

  }

}
