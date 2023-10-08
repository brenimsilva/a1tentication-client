import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs";
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "https://localhost:7142";
  private user = new BehaviorSubject<User>({} as User);

  user$: Observable<User> = this.user.asObservable();

  constructor(private http: HttpClient) {}

  userLogIn(email: string, password: string): Observable<User> {
    const fd = new FormData();
    fd.set("email", email);
    fd.set("password", password);
    return this.http.post<User>(`${this.apiUrl}/Auth`, fd).pipe(
      map((res) => {
        this.user.next(res);
        return res;
      })
    );
  }

  userLogOff() {
  }



}
