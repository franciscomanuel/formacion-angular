import { Component, HostBinding, Input } from '@angular/core';
import { Item } from '../../models/item.interfaces';

@Component({
  selector: 'app-sidenav',
  standalone: false,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @HostBinding('class') clasName = 'flex-container';

  @Input({required: true}) items!: Item[];
}