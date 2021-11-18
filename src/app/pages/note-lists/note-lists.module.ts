import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteListsPageRoutingModule } from './note-lists-routing.module';

import { NoteListsPage } from './note-lists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteListsPageRoutingModule
  ],
  declarations: [NoteListsPage]
})
export class NoteListsPageModule {}
