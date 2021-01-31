import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
];
@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  providers: [UserService, AuthService],
})
export class UserModule {}
