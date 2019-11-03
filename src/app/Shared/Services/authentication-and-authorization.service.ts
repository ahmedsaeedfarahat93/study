import { Router, ActivatedRoute } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService, SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";

@Injectable({
  providedIn: "root"
})
export class AuthenticationAndAuthorizationService {
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  user: SocialUser;

  Getuser() {
    return this.user;
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(data => {
      this.user = data;
    });
  }

  signOut(): void {
    this.authService.signOut().then(data => {
      this.user = null;
      this.router.navigateByUrl("/login");
    });
  }
}
