import {Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";


@Directive({
  selector: '[appDropdown]'
})

export class DropDownDirective{

  constructor(private elRef: ElementRef,  private renderer: Renderer2){}

  @Input() defaultClass = "btn-group";

  @HostListener('click')
  click(eventData: Event){
    if(this.defaultClass === "btn-group"){
      this.renderer.addClass(this.elRef.nativeElement, "open");
      this.defaultClass = "btn-group open";
    }
    else{
      this.renderer.removeClass(this.elRef.nativeElement, "open");
      this.defaultClass = "btn-group";
    }
  }
}
