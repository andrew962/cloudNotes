import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-note-lists',
  templateUrl: './note-lists.page.html',
  styleUrls: ['./note-lists.page.scss'],
})
export class NoteListsPage implements OnInit {
  readonly image: string = "../../assets/undraw_no_data.svg";
  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }
  ngOnInit() {
  }
  newNoteBtn() {
    this.router.navigateByUrl('/new-note')
  }
  deleteSlideBtn(id: number) {
    this.deleteAlertConfirm();
  }
  async deleteAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: 'Seguro que quieres eliminar esta nota?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'seconday',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          cssClass: 'alert-btn-del',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
