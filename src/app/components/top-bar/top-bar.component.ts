import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'cat-top-bar',
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent {

  constructor(private router: Router) {
  }

  logout() {
    localStorage.setItem("username", "");
    localStorage.setItem("password", "");
    this.router.navigate(['/kq/login'])
  }

}
