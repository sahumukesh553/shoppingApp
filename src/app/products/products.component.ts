import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation :ViewEncapsulation.None
})
export class ProductsComponent implements OnInit,OnChanges,DoCheck ,AfterContentInit{
@Output() productAdded  =new EventEmitter<string>();
@Input("products") products ?:string[];
@ViewChild('newProduct') product?:ElementRef;
@ContentChild('title') title?:ElementRef;
ngDoCheck(): void {
    console.log("do check");
}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('do chnages '+this.product?.nativeElement.value);
      console.log(changes);
  }

  ngOnInit(): void {
    console.log('oninit '+this.product?.nativeElement.value);
    console.log('onit '+this.title);
  }
  OnProductAdded(input:any){
    
    console.log('product'+this.product?.nativeElement.value);
    console.log(input);
    this.productAdded.emit(input.value);
  }
  ngAfterContentInit(): void {
    console.log(this.title);
  }
}
