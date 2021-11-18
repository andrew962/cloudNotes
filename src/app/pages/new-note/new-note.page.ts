import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.page.html',
  styleUrls: ['./new-note.page.scss'],
})
export class NewNotePage implements OnInit, OnDestroy {
  editor: Editor;
  html: '';
  firstToolbar: Toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }]
  ];
  secondToolbar: Toolbar = [
    ["text_color", "background_color"],
    ["ordered_list", "bullet_list"],
    ["align_left", "align_center", "align_right", "align_justify"]
  ];
  constructor() {
    this.editor = new Editor();
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
