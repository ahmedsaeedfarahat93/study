import { ProductService } from "./../../../Shared/Services/product/product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  products: any[] = [];
   
  ngOnInit() {
    //get All products
    this.productService.GetAllProduct().subscribe(
      (data: []) => {
        this.products = [...data];
      },
      error => {}
    );
  }
}
