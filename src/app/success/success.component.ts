import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  user: User = {} as User;
  constructor(private service: AuthService){}
  ngOnInit(): void {
      this.service.user$.subscribe((data) => {
      console.log(data);
      this.user = data;
    })
  }

}
