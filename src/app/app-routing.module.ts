import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    // loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    loadChildren: () => import('./tabs/tabs-manager/tabs-manager.module').then(m => m.TabsManagerPageModule)
  },
  {
    path: '',
    redirectTo: 'tabs-manager',
    pathMatch: 'full'
  },
  {
    path: 'tabs-manager',
    loadChildren: () => import('./tabs/tabs-manager/tabs-manager.module').then(m => m.TabsManagerPageModule)
  },
  {
    path: 'new-note',
    loadChildren: () => import('./pages/new-note/new-note.module').then(m => m.NewNotePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'note-lists',
    loadChildren: () => import('./pages/note-lists/note-lists.module').then(m => m.NoteListsPageModule)
  },
  {
    path: 'password-recovery',
    loadChildren: () => import('./pages/password-recovery/password-recovery.module').then(m => m.PasswordRecoveryPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
