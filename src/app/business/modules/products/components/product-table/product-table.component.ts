import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../models/product.interface';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-product-table',
  standalone: false,
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss',
})
export class ProductTableComponent {
  @HostBinding("class") className = "flex-container";
  
  @Input({ required: true }) dataSource!: MatTableDataSource<Product>;

  @Output() keyUpFilter = new EventEmitter<string>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns = ['name', 'price', 'amount', 'stars'];

  onKeyUpFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;

    this.keyUpFilter.emit(filterValue.trim().toLowerCase());
  }
}
