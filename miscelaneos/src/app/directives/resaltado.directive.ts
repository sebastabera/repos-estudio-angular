import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") nuevoColor:string;

  constructor(private el:ElementRef) { 
  }

  @HostListener('mouseenter') mouseEntro(){
    console.log(this.nuevoColor);
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null);
  }

  private resaltar(color:String){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
