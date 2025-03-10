import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { MainContentComponent } from '../core/components/main-content/main-content.component';
import { HomeComponent } from '../core/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'shops',
        loadChildren: () =>
          import('./modules/shops/shops.module').then(
            (module) => module.ShopsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}
