import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactComponent } from './components/contact/contact.component';
import { ItemsComponent } from './components/products/items/items.component';
import { RegisterComponent } from './components/login/register/register.component';
import { AuthGuard } from './auth.guard';
import { DataComponent } from './components/contact/data/data.component';

const routes: Routes = [
  {path : '',redirectTo : 'login',pathMatch : 'full' },
  {path : 'login',component : LoginComponent},
  {path : 'register',component : RegisterComponent, canActivate : [AuthGuard]},
  {path : 'dashboard',component : DashboardComponent, canActivate : [AuthGuard]},
  {path : 'products',component : ProductsComponent, canActivate : [AuthGuard]},
  {path : 'contact',component : ContactComponent, canActivate : [AuthGuard]},
  {path : 'data/:id',component : DataComponent, canActivate : [AuthGuard]},
  {path : 'products/:item' , component :ItemsComponent, canActivate : [AuthGuard] },
  {path : '**',component : NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
