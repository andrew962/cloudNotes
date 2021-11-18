import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewNotePageRoutingModule } from './new-note-routing.module';

import { NewNotePage } from './new-note.page';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewNotePageRoutingModule,
    NgxEditorModule
  ],
  declarations: [NewNotePage]
})
export class NewNotePageModule {}
