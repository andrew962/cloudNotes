import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  signOut() {
    this.authService.signOut()
      .then(() => {
        this.router.navigateByUrl('/tabs-manager/login')
      })
      .catch(err => { })
  }
}
