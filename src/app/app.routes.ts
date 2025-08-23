import { Routes } from '@angular/router';
import { Home } from './pages/home/home.js';
import { Setting } from './pages/setting/setting.js';
import { Login } from './pages/login/login.js';
import { Users } from './pages/users/users.js';
import { Products } from '@app/pages/products/products';
import {ProductDetails} from '@app/components/product-details/product-details';
import {ProductForm} from '@app/components/product-form/product-form';
import {NotFound} from '@app/pages/not-found/not-found';
import {isLoggedInGuard} from '@app/guards/is-logged-in-guard';

export const routes: Routes = [
  {
    path: "",
    component: Home,
    canActivate:[isLoggedInGuard]
  },
  {
    path: "home",
    component: Home,
    canActivate:[isLoggedInGuard]
  },
  {
    path: "users",
    component: Users,
    canActivate:[isLoggedInGuard]
  },
  {
    path: "products",
    component: Products,
    canActivate:[isLoggedInGuard]
  },
  {
    path: "products-details",
    children:[{
      path:"",
      component: ProductDetails
    },{
      path:":id",
      component: ProductDetails
    }]
  },
  {
    path: "products-form",
    component: ProductForm
  },
  {
    path: "setting",
    component: Setting,
    canActivate:[isLoggedInGuard]
  },
  {
    path: "login",
    component: Login
  },
  {
    path: "**",
    component: NotFound
  }
];
