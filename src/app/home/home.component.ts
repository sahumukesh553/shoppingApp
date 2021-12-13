import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isTrue=true;
  switch=1;
products:string[]=['product1','product2','product3'];
  constructor() { 
    setInterval(()=>{
      this.switch=Math.floor(Math.random() * 10) + 1;
    },1000)
  }

  ngOnInit(): void {
  }
 
  addProduct(product:string){
    this.products.push(product);

  }
}
