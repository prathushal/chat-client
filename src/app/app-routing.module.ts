import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ChatComponent } from './chat';
import { HomeComponent } from './home';
import { AuthGuard } from './_guards';
import { AdminComponent } from './admin/admin.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

  // otherwise redirect to Login Page
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
