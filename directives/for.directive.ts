import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive ({
  // tslint:disable-next-line: directive-selector
  selector: '[myFor]',
})
export class ForDirective implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('myForEm') numbers: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
    ){}

  ngOnInit(): void {
    // tslint:disable-next-line: variable-name
    for (const number of this.numbers) {
      this.container.createEmbeddedView(
        this.template, { $implicit: number });
    }
  }
}
