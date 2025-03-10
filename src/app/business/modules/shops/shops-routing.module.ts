import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffsComponent } from './components/staffs/staffs.component';
import { SchedulesComponent } from './components/schedules/schedules.component';

const routes: Routes = [
  {
    path: 'staffs',
    component: StaffsComponent,
  },
  {
    path: 'schedules',
    component: SchedulesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopsRoutingModule {}
