import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsManagerPage } from './tabs-manager.page';

const routes: Routes = [
  {
    path: '',
    component: TabsManagerPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../../pages/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../../pages/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs-manager/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-manager/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsManagerPageRoutingModule { }
