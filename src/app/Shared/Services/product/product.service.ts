import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get("http://localhost:5053/api/Categories/GetCategories");
  }

  postProduct(product) {
    return this.http.post(
      "http://localhost:5053/api/Products/PostProduct",
      product
    );
  }

  GetAllProduct() {
    return this.http.get("http://localhost:5053/api/Products/GetProducts");
  }
}
