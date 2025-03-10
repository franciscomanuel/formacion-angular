import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  @HostBinding('class') className = 'flex-container main-page-content';
}
