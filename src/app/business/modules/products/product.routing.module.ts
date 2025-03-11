import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './routes/products-list/products-list.component';
import { ProductDetailComponent } from './routes/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },

  {
    path: ':id',
    component: ProductDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
