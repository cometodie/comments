import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../../../services/login/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  private email = new FormControl('', Validators.required);
  private password = new FormControl('', Validators.required);

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    public snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = fb.group({
      email: this.email,
      password: this.password
    });
  }

  ngOnInit() {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  submitForm(event, value) {
    this.loginService.login(value.email, value.password).subscribe(
      user => {
        this.router.navigate(['/home']);
        this.loginService.setToken(user.api_token);
        this.loginService.setUser(user);
        this.openSnackBar(`Hello ${user.name}`, 'Close');
      },
      error => {
        this.openSnackBar(`Wrong email or password!`, 'Close');
      }
    );
  }
}
