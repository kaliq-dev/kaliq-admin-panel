import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {AuthService} from "../auth.service";

@Component({
  moduleId: module.id,
  selector: 'app-kq-login',
  templateUrl: './kq-login.component.html',
  styleUrls: ['./kq-login.component.css']
})
export class KqLoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loginError: boolean = false;
  public loginSuccess: boolean = false;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.authService.setLoginStatus(false);
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitLoginForm() {
    this.loginError = false;
    this.loginSuccess = false;
    if (this.loginForm.value && this.authService.login(this.loginForm.value.username, this.loginForm.value.password)) {
      this.loginSuccess = true;
      setTimeout(() => {
        this.authService.setLoginStatus(true);
        this.router.navigate(['kq/dashboard']);
      }, 1500)
    } else {
      this.loginError = true;
      this.loginForm.reset();
    }
  }
}
