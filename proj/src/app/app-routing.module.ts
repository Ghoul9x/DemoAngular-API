import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './admin/product-create/product-create.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'chi-tiet/:id', component:ProductDetailComponent
  },
  {
    path:'gioithieu', component: AboutComponent
  },
  {
    path:'product-list', component: ProductListComponent 
  },
  {
    path: 'product-create', component: ProductCreateComponent
  },
  {
    path: 'product-edit/:id', component: ProductEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
