import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  // @Input() backgroundColor: string;

  // ElementRef allows us to access properties existing on the html element
  constructor(private element: ElementRef) { 
  }

  // @Input('appClass') set backgroundColor(color: string){
  //   this.element.nativeElement.style.backgroundcolor = color;
  // }

    @Input('appClass') set classNames(classObj: any){
    for(let key in classObj){
      if (classObj[key]){
this.element.nativeElement.classList.add(key);
      }else{
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
  
}
