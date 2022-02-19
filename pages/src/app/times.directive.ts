import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  @Input('appTimes') set render(times: number){
    //clear whatever pre-existed in the container
    this.viewContainer.clear();

    for(let i = 0; i < times; i++){
      // create some html inside
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i
      })
    }
  }

}
