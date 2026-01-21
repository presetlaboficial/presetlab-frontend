import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DmcaComponent } from './pages/dmca/dmca.component';
import { ProductComponent } from './pages/product/product.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AccountComponent } from './pages/account/account.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'PresetLab',
    pathMatch: 'full',
  },
  {
    path: 'dmca',
    component: DmcaComponent,
    title: 'DMCA - PresetLab',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
];
