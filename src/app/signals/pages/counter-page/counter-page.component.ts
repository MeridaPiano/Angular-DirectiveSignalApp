import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: ``
})
export class CounterPageComponent {

  public counter = signal(10);
  public squareCounter = computed( () => this.counter() * this.counter() );

  increseBy( value: number ){
    // this.counter.set(this.counter() + value );
    this.counter.update(x => x + value);

  }

  decreseBy(value: number ){
    this.counter.update(x => x - value);
  }

}
