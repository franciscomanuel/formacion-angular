import { Component, HostBinding, inject, ViewChild } from '@angular/core';
import { UserTableComponent } from '../../components/user-table/user-table.component';
import { UserService } from '../../services/user/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  @HostBinding('class') className = 'flex-container main-page-content';

  @ViewChild(UserTableComponent)
  userTableComponent!: UserTableComponent;

  private readonly _userService = inject(UserService);

  dataSource: MatTableDataSource<User> = new MatTableDataSource();

  ngOnInit(): void {
    this.getUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.userTableComponent.sort;
    this.dataSource.paginator = this.userTableComponent.paginator;
  }

  applyFilter(value: string) {
    this.dataSource.filter = value;

    this.dataSource.paginator?.firstPage();
  }

  private getUsers() {
    this._userService
      .getAll()
      .subscribe((users: User[]) => (this.dataSource.data = users));
  }
}
