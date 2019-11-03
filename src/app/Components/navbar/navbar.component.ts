import { User } from "./../../Contracts/User";
import { Component, OnInit } from "@angular/core";
import { AuthService, SocialUser } from "angularx-social-login";
import { AuthenticationAndAuthorizationService } from "src/app/Shared/Services/authentication-and-authorization.service";

const AdminUsers = ["AhmedFarhat93@gmail.com"];

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private CustomAuthService: AuthenticationAndAuthorizationService
  ) {}

  private user: SocialUser = null;
  private userName: string = "";
  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
      if (user) this.userName = user.name;
      else this.userName = "";
    });
  }
  //#region  properties

  DivClass = "dropdown-menu";
  LiClass = "nav-item dropdown";
  //#endregion

  //#region  Methods
  ShowLinks() {
    this.DivClass = "dropdown-menu show";
    this.LiClass = "nav-item dropdown show";
  }

  HideLinks() {
    this.DivClass = "dropdown-menu";
    this.LiClass = "nav-item dropdown";
  }

  Logout() {
    this.CustomAuthService.signOut();
  }

  //#endregion
}
