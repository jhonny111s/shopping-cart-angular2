import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';
//import './rxjs-extensions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

//Services
import { ProductService }    from './Services/product.service';
import { ShopCartService }    from './Services/shop-cart.service';

//Components
import { AppComponent }         from './app.component';
import { ProductsComponent }    from './products.component';
import { MenuComponent }        from './menu.component';
import { CartComponent }        from './cart.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
      },
      {
        path: 'products',
        component: ProductsComponent
      },
    ])
  ],
  declarations: [
    AppComponent,
    ProductsComponent,
    MenuComponent,
    CartComponent
  ],

  providers: [
    ProductService,
    ShopCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
