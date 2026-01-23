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
    title: 'PresetLab'
  },
  {
    path: 'dmca',
    component: DmcaComponent,
    title: 'DMCA - PresetLab'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contato - PresetLab'
  },
  {
    path: 'orders',
    component: OrdersComponent,
    title: 'Pedidos - PresetLab'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [guestGuard],
    title: 'Login - PresetLab'
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [guestGuard],
    title: 'Registro - PresetLab'
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [authGuard],
    title: 'Minha Conta - PresetLab'
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
    title: 'Compra Finalizada - PresetLab'
  },
  {
    path: 'account/orders/:id',
    loadComponent: () =>
      import('./pages/account/order-details/order-details.component').then(
        (m) => m.OrderDetailsComponent,
      ),
      title: 'Detalhes - PresetLab'
  },
];
