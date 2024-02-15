import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { ItemsComponent } from './components/products/items/items.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/login/register/register.component';
import { FavoriteComponent } from './components/products/favorite/favorite.component';
import { HttpClientModule } from '@angular/common/http';
import { DataComponent } from './components/contact/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ContactComponent,
    ProductsComponent,
    ItemsComponent,
    FooterComponent,
    NotFoundComponent,
    RegisterComponent,
    FavoriteComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
