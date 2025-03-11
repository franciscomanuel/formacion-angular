import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  @HostBinding('class') className = 'flex-container main-page-content';

  constructor() {}
}
