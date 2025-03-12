import {
  Component,
  HostBinding,
  inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Item } from '../../models/item.interfaces';
import { SidenavService } from '../../services/sidenav/sidenav.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  standalone: false,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent implements OnInit, OnDestroy {
  @HostBinding('class') clasName = 'flex-container';

  @Input({ required: true }) items!: Item[];

  private readonly _sidenavService = inject(SidenavService);
  private readonly unsubscribeSubject$ = new Subject<void>();

  opened = false;

  ngOnInit(): void {
    this.subscribeSidenavService();
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject$.next();
    this.unsubscribeSubject$.complete();
  }

  private subscribeSidenavService() {
    this._sidenavService
      .getState()
      .pipe(takeUntil(this.unsubscribeSubject$))
      .subscribe((opened: boolean) => {
        this.opened = opened;
      });
  }
}
