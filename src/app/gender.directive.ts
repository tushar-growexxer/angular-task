import {Directive, ElementRef, Injectable, Input, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector:'[appGenderDirective]'
})
export class GenderDirective implements OnInit{

  @Input('appGenderDirective') gender:string

  constructor(private elRef:ElementRef, private renderer:Renderer2) {
  }

  ngOnInit() {
    // console.log(this.elRef)
    // console.log(this.gender)
    if (this.gender === "Male") {
      // For Male, use different shades of blue
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#C0E4FF');
      this.renderer.setStyle(this.elRef.nativeElement, 'color', '#004080');
    } else {
      // For Female, use different shades of pink
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#FFD1DC');
      this.renderer.setStyle(this.elRef.nativeElement, 'color', '#FF69B4');
    }
  }
}
