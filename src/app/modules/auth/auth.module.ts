import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../../shared/header/header.module';

// components
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, HeaderModule],
})
export class AuthModule {}
