import {
  AfterViewInit,
  Component,
  HostBinding,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product.interface';
import { MatTableDataSource } from '@angular/material/table';
import { ProductTableComponent } from '../../components/product-table/product-table.component';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit, AfterViewInit {
  @HostBinding('class') className = 'flex-container main-page-content';

  @ViewChild(ProductTableComponent)
  productTableComponent!: ProductTableComponent;

  private readonly _productService = inject(ProductService);

  dataSource: MatTableDataSource<Product> = new MatTableDataSource();

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.productTableComponent.sort;
    this.dataSource.paginator = this.productTableComponent.paginator;
  }

  applyFilter(value: string) {
    this.dataSource.filter = value;

    this.dataSource.paginator?.firstPage();
  }

  private getProducts() {
    this._productService
      .getAll()
      .subscribe((products: Product[]) => (this.dataSource.data = products));
  }
}
