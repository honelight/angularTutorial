import {Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";


@Directive({
  selector: '[appDropdown]'
})

export class DropDownDirective{

  constructor(private elRef: ElementRef,  private renderer: Renderer2){}

  dropDown = false;

  @HostListener('click')
  click(eventData: Event){
    this.dropDown = !this.dropDown;
    if(this.dropDown){
      this.renderer.addClass(this.elRef.nativeElement,"open");
    }else{
      this.renderer.removeClass(this.elRef.nativeElement,"open");
    }
  }
}
