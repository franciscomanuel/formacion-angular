import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  @HostBinding('class') className = 'flex-container main-page-content';
}
