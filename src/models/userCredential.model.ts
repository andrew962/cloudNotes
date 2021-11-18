import firebase from 'firebase/compat/app';
export interface UserCredentialModel {
    additionalUserInfo: firebase.auth.AdditionalUserInfo;
    credential: firebase.auth.AuthCredential;
    operationType: string;
    user: firebase.User;
}