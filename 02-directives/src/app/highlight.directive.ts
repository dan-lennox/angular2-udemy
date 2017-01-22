import {Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
  // 3. BEST TECHNIQUE
  @HostListener('mouseenter') mouseover() {
    this._backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this._backgroundColor = this.defaultColor;
  }
  // 'get' is a typescript accessor.
  // this binds the background color of the host element to the
  // _backgroundColor variable. So when we want to modify the color
  // we simply update this variable. This is fucking cool.
  @HostBinding('style.backgroundColor') get setColor() {
    return this._backgroundColor;
  }

  @Input() defaultColor = 'white';
  @Input('highlight') highLightColor = 'green';

  private _backgroundColor: string;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {

    // 1. Lazy way to do it.
    //this._elementRef.nativeElement.style.backgroundColor = 'green';

    // 2. More robust, safe, best practice way to do it.
    //this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'blue');
  }

  ngOnInit() {
   this._backgroundColor = this.defaultColor;
  }

}
