import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string,
  route: string,
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styles: `
  li {
    cursor: pointer;
  }
  `
})
export class SideMenuComponent {

  public menuItem = signal<MenuItem[]>([
      { title: 'Contador', route: 'counter' },
      { title: 'Usuario', route: 'user_info' },
      { title: 'Mutaciones', route: 'properties' },
    ]);

  // public menuItems: MenuItem[] = [
  //   { title: 'Contador', route: 'counter' },
  //   { title: 'Usuario', route: 'user-info' },
  //   { title: 'Mutaciones', route: 'properties' },
  // ];

}
