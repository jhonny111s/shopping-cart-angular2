import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { Hero } from './hero';
import { ProductService } from './Services/product.service';
import { ShopCartService } from './Services/shop-cart.service';

@Component({
  moduleId: module.id,
  selector: 'products',
  templateUrl: 'products.component.html'
  //styleUrls: [ 'dashboard.component.css' ]

})
export class ProductsComponent implements OnInit {

  products= {};
  shopList = [];
  count = 0;

//son como un providers
  constructor(
  private router: Router,
  private productService: ProductService,
  private shopcartservice: ShopCartService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .then(products => {
        this.products = products,
        console.log(products)
      });
  }

  add(product): void {
    this.shopcartservice.add(product)
    this.count++
  }

  gotoDetail(): void {
  let link = ['/shoplist', this.shopList];
  this.router.navigate(link);
}
}
