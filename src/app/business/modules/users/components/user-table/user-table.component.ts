import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/user.interface';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-table',
  standalone: false,
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss',
})
export class UserTableComponent {
  @HostBinding('class') className = 'flex-container';

  @Input({ required: true }) dataSource!: MatTableDataSource<User>;

  @Output() keyUpFilter = new EventEmitter<string>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns = ['id', 'name', 'surname', 'email', 'phone'];

  onKeyUpFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;

    this.keyUpFilter.emit(filterValue.trim().toLowerCase());
  }
}
