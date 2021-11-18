import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fAuth: AngularFireAuth
  ) { }

  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()

    // return this.fAuth.signInWithRedirect(provider)
    return this.fAuth.signInWithPopup(provider)
  }
  signInWithCredentialUser(email: string, password: string) {
    // return new Promise<UserCredentialModel>((resolve, reject) => {
    //   this.fAuth.signInWithEmailAndPassword(email, password).then(
    //     res => resolve(<UserCredentialModel>res),
    //     err => this.handleError(err, err)//reject(err)
    //   )
    // })
    // return firebase.auth().signInWithEmailAndPassword(email, password)
    return this.fAuth.signInWithEmailAndPassword(email, password);
  }
  registerUser(email: string, password: string) {
    return this.fAuth.createUserWithEmailAndPassword(email, password)
  }
  signOut() {
    if (this.fAuth.currentUser)
      return this.fAuth.signOut();
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
