import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userForm: FormGroup

  constructor(fb: FormBuilder, private service: AuthService, private router: Router) {
    this.userForm = fb.group({UserEmail: "", UserPassword: ""});
  }
  login() {
    const formData = this.userForm.value;
    this.service.userLogIn(formData.UserEmail, formData.UserPassword).subscribe((res) => {
      this.router.navigateByUrl("/success");
    });
  }



}
