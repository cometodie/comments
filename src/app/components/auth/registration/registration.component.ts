import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../../../services/login/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  private name = new FormControl('', Validators.required);
  private email = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}')
  ]);
  private password = new FormControl('', Validators.required);
  private avatar = new FormControl('');

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    public snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = fb.group({
      name: this.name,
      email: this.email,
      password: this.password,
      avatar: this.avatar
    });
  }

  ngOnInit() {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  submitForm(event, value) {
    this.loginService.registry(value.name, value.email, value.password, value.avatar).subscribe(
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
