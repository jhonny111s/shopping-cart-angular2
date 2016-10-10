import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { Hero } from './hero';
import { ProductService } from './product.service';

@Component({
  moduleId: module.id,
  selector: 'products',
  templateUrl: 'products.component.html',
  //styleUrls: [ 'dashboard.component.css' ]

})
export class ProductsComponent implements OnInit {

  products= {};

  constructor(
  private router: Router,
  private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .then(products => {
        this.products = products,
        console.log(products)
      });
  }
}
