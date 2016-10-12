import { Component, OnInit } from '@angular/core';

import { ShopCartService } from './Services/shop-cart.service';

@Component({
  moduleId: module.id,
  selector: 'cart',
  templateUrl: 'cart.component.html',
  //styleUrls: [ 'dashboard.component.css' ]

})
export class CartComponent implements OnInit {

  count = 0;

  constructor(
    private shopcartservice: ShopCartService
  ) { }

  ngOnInit(): void {

    }

  countShopList(): void {
    this.count = this.shopcartservice.con();
  }

}
