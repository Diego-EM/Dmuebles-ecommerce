import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CartOverviewComponent } from './pages/cart-overview/cart-overview.component';
import { PageInfoComponent } from './pages/page-info/page-info.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:id', component: ProductViewComponent},
  {path: 'search/:req', component: ProductListComponent},
  {path: 'car', component: CartOverviewComponent},
  {path: 'about', component: PageInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
