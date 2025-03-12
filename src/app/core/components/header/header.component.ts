import { Component, inject } from '@angular/core';
import { SidenavService } from '../../services/sidenav/sidenav.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private readonly _sidenavService = inject(SidenavService)

  openClose(): void {
    this._sidenavService.toogleState();
  }
}
