import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    if (this.isLoggedIn()) {
      this.router.navigate(['kq/dashboard']);
    } else {
      this.router.navigate(['kq/login']);
    }
  }

  isLoggedIn() {
    return this.authService.getLoginStatus();
  }

}
