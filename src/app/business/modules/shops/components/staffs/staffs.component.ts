import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-staffs',
  standalone: false,
  templateUrl: './staffs.component.html',
  styleUrl: './staffs.component.scss',
})
export class StaffsComponent {
  @HostBinding('class') className = 'flex-container main-page-content';
}
