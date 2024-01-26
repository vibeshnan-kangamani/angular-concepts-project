import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [

  { path: "", redirectTo: "login", pathMatch: 'full'},

  {

    path: "",
    component: LayoutComponent,
    data: {
      layout: 'empty'
    },
    children:[
      {path: "login", loadComponent: () => import('./modules/login/login.component').then(x => x.LoginComponent) }
    ]

  },

  {

    path: "",
    component: LayoutComponent,
    data: {
      layout: 'horizontal'
    },
    children:[
      {path: "capgemini", loadComponent: () => import('./modules/capgemini/capgemini.component').then(x => x.CapgeminiComponent) },
      {path: "streamhub", loadComponent: () => import('./modules/streamhub/streamhub.component').then(x => x.StreamhubComponent) }
    ]

  }

];
