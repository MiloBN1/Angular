import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ProductComponent } from './components/product/product.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ButtonComponent,
    GlobalErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
