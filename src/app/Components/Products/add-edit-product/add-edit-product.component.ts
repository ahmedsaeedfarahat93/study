import { ProductService } from "./../../../Shared/Services/product/product.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-add-edit-product",
  templateUrl: "./add-edit-product.component.html",
  styleUrls: ["./add-edit-product.component.css"]
})
export class AddEditProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  categories: any;
  product = {};

  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get("id");
    if (productId)
      //get product

      // Get All Categories
      this.productService.getCategories().subscribe(
        data => {
          this.categories = data;
          // sort Array alphapitically
          this.categories.sort(function(a, b) {
            if (a.CategoryName < b.CategoryName) {
              return -1;
            }
            if (a.CategoryName > b.CategoryName) {
              return 1;
            }
            return 0;
          });
        },
        error => {
          console.log("Error", error);
        }
      );
  }

  onSubmit(form) {
    console.log(form);
    this.productService.postProduct(this.product).subscribe(
      data => {
        this.router.navigateByUrl("/products");
      },
      error => {
        console.log(error);
      }
    );
  }

  log(input) {
    console.log(input);
  }
}
