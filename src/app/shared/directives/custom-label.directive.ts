import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors;

  @Input() set color(value: string){
    this._color = value
    this.setStyle();
    // console.log({color: value})
  }

  @Input() set errors( value: ValidationErrors | undefined  ) {
    this._errors = value;
    this. setErrorMessage();
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    console.log(el);
    this.htmlElement = el;

    // this.htmlElement.nativeElement.innerHTML = 'HolaMundo';
  }

  ngOnInit(): void {

    this.setStyle();
    // console.log('Directiva - ngOnInit');

   }

   setStyle(): void {
    if (!this.htmlElement) return;

    this.htmlElement!.nativeElement.style.color = this._color;
   }

   setErrorMessage() {
    if( !this.htmlElement ) return;
    if( !this._errors ) {
      this.htmlElement.nativeElement.innerHTML = ''
      return;
    }

    const errors = Object.keys(this._errors);

    if( errors.includes('required') ) {
      this.htmlElement.nativeElement.innerHTML = 'Este campo es requerido';
      return;
    }

    if( errors.includes('minlength') ){
      const min = this._errors!['minlength']['requiredLength'];
      const act = this._errors!['minlength']['actualLength'];
      this.htmlElement.nativeElement.innerHTML = `El tamano del correo es minimo de ${min} caracteres.  Numero actual de caracteres ${act}.`;
      return;
    }

    if( errors.includes('email') ){
      this.htmlElement.nativeElement.innerHTML = 'Email no valido.';
      return;
    }

   }
}
