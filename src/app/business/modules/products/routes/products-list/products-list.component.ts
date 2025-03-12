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
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit, AfterViewInit {
  @HostBinding('class') className = 'flex-container main-page-content';

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private readonly _productService = inject(ProductService);

  dataSource: MatTableDataSource<Product> = new MatTableDataSource();
  displayedColumns = ['name', 'price', 'amount', 'stars'];
  product = {
    name: 'Nombre',
    price: 7,
    amount: 9,
  };

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private getProducts() {
    this._productService.getAll().subscribe((products: Product[]) => this.dataSource.data = products);
  }
}
