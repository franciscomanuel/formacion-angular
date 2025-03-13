import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './routes/users-list/users-list.component';
import { UserDetailComponent } from './routes/user-detail/user-detail.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
  },

  {
    path: ':id',
    component: UserDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
