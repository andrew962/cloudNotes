import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteListsPage } from './note-lists.page';

const routes: Routes = [
  {
    path: '',
    component: NoteListsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteListsPageRoutingModule {}
