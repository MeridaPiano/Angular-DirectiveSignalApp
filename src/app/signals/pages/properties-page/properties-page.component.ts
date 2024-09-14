import { Component, computed, effect, OnDestroy, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styles: ``
})
export class PropertiesPageComponent implements OnDestroy {

  public counter = signal(10);

  public user = signal<User>({
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  });

  ngOnDestroy(): void {
    this.userChangeEffect.destroy();
  }
  public fullName = computed( () => `${this.user().first_name} ${this.user().last_name}`);

  public userChangeEffect = effect( () => {
    console.log( `${this.user().first_name} - ${this.counter}` );
  })

  increseBy(value: number){
    this.counter.update(current => current + value );
  }

  onFieldUpdated( field: keyof User, value: string){

    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // })

    this.user.update( current => {
      switch( field ) {
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'id':
          current.id = Number( value );
          break;

      }
      return current;
    })
  }
}
