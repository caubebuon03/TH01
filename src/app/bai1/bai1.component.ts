import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {

  constructor() { }
  title="Bài 1:  Tính S(n) = x + x^2 + x^3 + … + x^n";
  x=10;
  n=10;
  s=0;

  ngOnInit(): void {
    for( let i=0;i<=(this.n);i++){
      this.s=this.s+Math.pow((this.x),i);
  }
  console.log(this.s);
}

}
