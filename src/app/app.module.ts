import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { ShoppingCartComponent } from "./Components/shopping-cart/shopping-cart.component";
import { NotFoundComponent } from "./Components/not-found/not-found.component";
// import { ProductListComponent } from "./Components/Products/products-list/products-list.component";
import { AddEditProductComponent } from "./Components/Products/add-edit-product/add-edit-product.component";
import { OrderListComponent } from "./Components/Orders/order-list/order-list.component";
import { CheckOutComponent } from "./Components/check-out/check-out.component";
import { HomeComponent } from "./Components/home/home.component";
import { LoginComponent } from "./Components/login/login.component";
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { AuthGuard } from "./Shared/Guards/auth.guard";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CustomFormsModule } from "ng2-validation";
import { ProductListComponent } from "./components/products/product-list/product-list.component";
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(
      "245084738532-77pgijkd9m6ldt7ujhv9o2tl57mt8nop.apps.googleusercontent.com"
    )
  }
]);

export function provideConfig() {
  return config;
}
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Home", component: HomeComponent },
  {
    path: "ShoppingCart",
    component: ShoppingCartComponent,
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent },
  { path: "products", component: ProductListComponent },
  { path: "product/:id?", component: AddEditProductComponent },
  { path: "product/new", component: AddEditProductComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingCartComponent,
    NotFoundComponent,
    // ProductsListComponent,
    AddEditProductComponent,
    OrderListComponent,
    CheckOutComponent,
    HomeComponent,
    LoginComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SocialLoginModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
