import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    UsersComponent,
    ProductsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    CoreModule
  ]
})
export class BusinessModule { }
