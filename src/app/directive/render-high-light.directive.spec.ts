import { ElementRef } from '@angular/core';
import { RenderHighLightDirective } from './render-high-light.directive';

describe('RenderHighLightDirective', () => {
  it('should create an instance', () => {
   
    const directive = new RenderHighLightDirective(new ElementRef();
    expect(directive).toBeTruthy();
  });
});
