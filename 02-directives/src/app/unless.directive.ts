import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  @Input() set unless(condition: boolean) {
    // Show the content if the condition is false.
    if (!condition) {
      // Show the template <template> that Angular desugar's to wrap around the element which
      // has this directive. Show it at the correct place indicated by the ViewContainerRef.
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else {
      // Hide the content if the condition is true.
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
