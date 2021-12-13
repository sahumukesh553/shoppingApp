import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderHighLight]'
})
export class RenderHighLightDirective implements OnInit {
@Input() defaultColor='blue';
@Input() HightLightColor='yellow';
  constructor(private element:ElementRef, private render:Renderer2) { }
  ngOnInit(): void {
    this.color=this.defaultColor;
      this.render.setStyle(this.element.nativeElement,'background-color','green');
  }
  @HostBinding('style.backgroundColor') color?:string;
@HostListener('mouseenter') onmouseover(event:Event)
{
  this.render.setStyle(this.element.nativeElement,'background-color',this.defaultColor);
}
@HostListener('mouseleave') onmouseover2(event:Event)
{//this.color='orange';
  this.render.setStyle(this.element.nativeElement,'background-color',this.HightLightColor);
}
}
