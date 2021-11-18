import { BehaviorService } from './../../../service/behavior.service';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { AuthService } from 'src/service/auth.service';
import _ from 'underscore';
import { TABTYPEENUM } from 'src/enums/tab-type.enum';
import { AlertController, AlertOptions, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  readonly imgGoogle: string = '../../../assets/google.svg'
  readonly imgLogo: string = '../../../assets/cloud_connected.svg'

  /**
   * Credentials
   * @param Email
   * @param Password
   */
  credentials: FormGroup;

  isLogin: boolean = true;

  loading: Promise<HTMLIonLoadingElement>;
  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private bService: BehaviorService,
    private loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.loading = this.loadingController.create({
      message: 'Por favor espere...'
    })
    this.credentials = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
    this.bService.tabType$.subscribe(res => {
      this.isLogin = res === TABTYPEENUM.Login;
    })
  }

  sendBtn() {
    this.presentLoading();
    let email = this.credentials.controls.email.value;
    let password = this.credentials.controls.password.value;
    if (this.isLogin) {
      this.authService.signInWithCredentialUser(email, password)
        .then(res => {
          if (res) {
            this.router.navigateByUrl('/note-lists')
          }
          console.log(res);
        })
        .catch(err => {
          console.log(
            err.message, err.code
          );
        })
        .finally(() => this.stopLoading())
    } else {
      this.authService.registerUser(email, password)
        .then(res => {
          if (res != null) {
            this.bService.selectTabNext('login');
          }
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          let options: AlertOptions = {
            message: 'Creado con éxito',
            buttons: ['Ok']
          }
          this.stopLoading(true, options);
          // this.presentAlertSuccess()
        })
    }
  }
  // googleLoginBtn() {
  //   this.authService.signInWithGoogle().then(res => {

  //   })
  // }
  async presentLoading() {
    await this.loading;
    (await this.loading).present();
  }
  async stopLoading(showAlert: boolean = false, options?: AlertOptions) {
    (await this.loading).dismiss();
    if (showAlert) {
      (await this.loading).onDidDismiss().then(() => {
        this.presentAlertSuccess(options);
      })
    }
  }
  async presentAlertSuccess(options: AlertOptions) {
    if (!_.isEmpty(options)) {
      let objOptions: AlertOptions = {};
      if (options.header != null) {
        _.extend(objOptions, { header: options.header })
      }
      if (options.message != null) {
        _.extend(objOptions, { message: options.message })
      }
      if (options.buttons != null) {
        _.extend(objOptions, { buttons: options.buttons })
      }
      const alert = await this.alertController.create(objOptions);
      await alert.present();
    }
  }
}
