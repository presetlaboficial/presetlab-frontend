import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DmcaComponent } from './pages/dmca/dmca.component';
import { ProductComponent } from './pages/product/product.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AccountComponent } from './pages/account/account.component';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';
import { SuccessComponent } from './pages/success/success.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OrdersComponent } from './pages/orders/orders.component';

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
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
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
    loadComponent: () =>
      import('./pages/product/product.component').then(
        (m) => m.ProductComponent,
      ),
  },
  {
    path: 'checkout',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/checkout/checkout.component').then(
        (m) => m.CheckoutComponent,
      ),
  },
  {
    path: 'success',
    component: SuccessComponent,
  },
  {
    path: 'account/orders/:id',
    loadComponent: () =>
      import('./pages/account/order-details/order-details.component').then(
        (m) => m.OrderDetailsComponent,
      ),
  },
];
