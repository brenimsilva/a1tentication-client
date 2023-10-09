import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userForm: FormGroup

  constructor(fb: FormBuilder, private service: AuthService, private aRouter: ActivatedRoute, private router: Router) {
    this.userForm = fb.group({UserEmail: "", UserPassword: ""});
  }
  login() {
    const formData = this.userForm.value;
    this.service.userLogIn(formData.UserEmail, formData.UserPassword).subscribe((res) => {
      this.aRouter.queryParams.subscribe((params) => {
        console.log(params['continue']);
          window.location.href= `${params['continue']}?token=${res.userToken}`;
      });
    });
  }



}
