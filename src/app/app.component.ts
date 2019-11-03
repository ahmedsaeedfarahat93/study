import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "angularx-social-login";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    // this.authService.authState.subscribe(user => {
    //   if (user) {
    //     let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
    //     let url = (returnUrl != null) ? returnUrl : "/Home";
    //     this.router.navigateByUrl(url);
    //   }
    // });
  }

  title = "AngularWorkshop";
}
