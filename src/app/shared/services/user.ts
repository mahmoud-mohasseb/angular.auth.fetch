export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

// note :creating authentication shared folder with the following commands
// ng g i shared/services/user
// ng g s shared/services/auth
