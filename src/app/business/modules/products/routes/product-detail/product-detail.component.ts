import {
  AfterViewInit,
  Component,
  HostBinding,
  ViewChild,
} from '@angular/core';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements AfterViewInit {
  @HostBinding('class') className = 'flex-container main-page-content';

  @ViewChild(ProductFormComponent) productFormComponent!: ProductFormComponent;

  ngAfterViewInit(): void {
    const result = this.productFormComponent.isFormValid;

    console.log("result: ", result);
  }

  onSave(product: Product): void {
    console.log("product desde el padre: ", product);
    const result = this.productFormComponent.isFormValid;

    console.log("result: ", result);
  }
}
