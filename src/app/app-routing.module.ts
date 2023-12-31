import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "success", component: SuccessComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
