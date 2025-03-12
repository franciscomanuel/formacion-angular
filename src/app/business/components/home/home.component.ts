import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @HostBinding('class') className = 'flex-container main-page-content';
}
