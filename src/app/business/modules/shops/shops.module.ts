import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { StaffsComponent } from './components/staffs/staffs.component';

@NgModule({
  declarations: [SchedulesComponent, StaffsComponent],
  imports: [CommonModule, ShopsRoutingModule],
})
export class ShopsModule {}
