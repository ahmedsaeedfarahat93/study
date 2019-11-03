import { Injectable } from "@angular/core";
import { AuthenticationAndAuthorizationService } from "../Services/authentication-and-authorization.service";

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  ActivatedRoute
} from "@angular/router";
import { SocialUser } from "angularx-social-login";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  user: SocialUser;
  constructor(
    private authService: AuthenticationAndAuthorizationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.user = this.authService.Getuser();
    let isAuthorized = this.user == null ? false : true;
    if (!isAuthorized) {
      this.router.navigate(["/login"], {
        queryParams: { returnUrl: state.url }
      });
      let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
      localStorage.setItem("returnUrl", returnUrl);
    }

    return isAuthorized;
  }
}
