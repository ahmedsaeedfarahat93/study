import { AuthenticationAndAuthorizationService } from "./../../Shared/Services/authentication-and-authorization.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService, SocialUser } from "angularx-social-login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private LoggedInService: AuthenticationAndAuthorizationService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  private user: SocialUser;
  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
    });
  }

  Login() {
    this.LoggedInService.signInWithGoogle();
  }
}
