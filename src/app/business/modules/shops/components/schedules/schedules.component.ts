import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-schedules',
  standalone: false,
  templateUrl: './schedules.component.html',
  styleUrl: './schedules.component.scss',
})
export class SchedulesComponent {
  @HostBinding('class') className = 'flex-container main-page-content';
}
