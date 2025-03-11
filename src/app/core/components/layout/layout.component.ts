import { Component, HostBinding } from '@angular/core';
import { Item } from '../../models/item.interfaces';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  @HostBinding('class') className = 'main-layout-route';

  protected readonly items: Item[] = [
    {
      name: "Users",
      link: "/users"
    },
    {
      name: "Products",
      link: "/products"
    },
    {
      name: "Staffs",
      link: "/shops/staffs"
    },
    {
      name: "Schedules",
      link: "/shops/schedules"
    }
  ];
}
