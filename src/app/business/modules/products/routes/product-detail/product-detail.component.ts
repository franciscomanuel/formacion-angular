import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  @HostBinding('class') className = 'flex-container main-page-content';
}
