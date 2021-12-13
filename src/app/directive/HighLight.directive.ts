import { ElementRef,Directive, OnInit } from "@angular/core";
@Directive(
    {
        selector:'[highlight]'
    }
)
export class HighLight implements OnInit{
    constructor(private element:ElementRef)
    {

    }
    ngOnInit(): void {
        (<HTMLElement>this.element.nativeElement).style.backgroundColor='red';
    }

}
    
