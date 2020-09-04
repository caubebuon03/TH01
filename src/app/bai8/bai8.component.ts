import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai8',
  templateUrl: './bai8.component.html',
  styleUrls: ['./bai8.component.css']
})
export class Bai8Component implements OnInit {

  constructor() { }
  h: any;
  dt: any;
  kq: any;

  ngOnInit(): void {
  }
  tinh(){
    this.kq= (this.h*this.dt)/3;
  }

}
