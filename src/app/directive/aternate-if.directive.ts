import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAternateIf]'
})
export class AternateIfDirective implements OnInit{
  @Input()appAternateIf?:boolean;
ngOnInit(): void {
  if(this.appAternateIf)
  {
    this.view.createEmbeddedView(this.template);
  }else
  {
    this.view.clear();
  }
    
}
  constructor(private template:TemplateRef<any>,private view:ViewContainerRef) { }

}
