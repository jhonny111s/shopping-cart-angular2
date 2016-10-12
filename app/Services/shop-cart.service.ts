import { Injectable } from '@angular/core';

@Injectable()
export class ShopCartService {
  shopList = [];

  add(product): void {
    this.shopList.push(product);
  }

  con() {
   return this.shopList.length;
  }



}
