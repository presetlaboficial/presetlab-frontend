import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DmcaComponent } from './pages/dmca/dmca.component';
import { ProductComponent } from './pages/product/product.component';

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
    path: 'product/:id',
    component: ProductComponent
  },
];
