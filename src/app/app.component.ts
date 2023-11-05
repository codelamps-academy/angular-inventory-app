import {Component} from '@angular/core';
import {Product} from "./product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // call product
  product: Product[];
  title = 'inventory-app';

  constructor() {
    this.product = [
      new Product(
      "HATS",
      "Topi Hitam",
      "/assets/images/products/black-hat.jpg",
      ["Men", "Accessories", "Hats"], // department
      29.99
    ),
      new Product(
        "SHOES",
        "Sepatu Hitam",
        "/assets/images/products/black-shoes.jpg",
        ["Men", "Accessories", "Shoes"], // department
        120.89
      ),
      new Product(
        "JACKET",
        "Jaket Biru",
        "/assets/images/products/blue-jacket.jpg",
        ["Men", "Accessories", "Jaket"], // department
        234.65
      ),
    ]
  }

  // selected product
  productSelected(product : Product): void {
    console.log("Product Clicked : ", product);
  }

}
