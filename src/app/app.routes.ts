import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DmcaComponent } from './pages/dmca/dmca.component';
import { ProductComponent } from './pages/product/product.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AccountComponent } from './pages/account/account.component';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'dmca',
    component: DmcaComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [guestGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [guestGuard],
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [authGuard],
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
];
