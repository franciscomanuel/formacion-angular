import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './core/components/error/error.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./business/business.module').then(module => module.BusinessModule),
  },
  {
    path: '404',
    component: ErrorComponent
  },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
