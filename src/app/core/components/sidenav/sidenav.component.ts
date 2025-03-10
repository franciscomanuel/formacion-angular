import { Component } from '@angular/core';

interface Item {
  name: string;
  link: string;
  isActive?: boolean;
}

@Component({
  selector: 'app-sidenav',
  standalone: false,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
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
