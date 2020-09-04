import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tinh-tong',
  templateUrl: './tinh-tong.component.html',
  styleUrls: ['./tinh-tong.component.css']
})
export class TinhTongComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let n = 10;
    let s = 0;
    for(let i=1;i<=n;++i){
       s += 1.0/i;
    }
    console.log(s);     
 
  }

}
