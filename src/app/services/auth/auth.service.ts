import {
    Injectable
} from '@angular/core';
import {
    AngularFireAuth
} from '../../../../node_modules/angularfire2/auth';

import {
    Observable,
    of
} from 'rxjs';
import {
    map,
    catchError
} from 'rxjs/operators';
import {
    User as firebaseUser
} from 'firebase';
import * as firebase from 'firebase/app';
import {
    CanActivate,
    Router
} from '../../../../node_modules/@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService implements CanActivate {

    public usuario: Observable < firebaseUser > ;

    constructor(private _fireAuth: AngularFireAuth, private _router: Router) {
        this.usuario = _fireAuth.authState;
    }

    iniciarSesion(email: string, password: string) {
        return this._fireAuth.auth.signInWithEmailAndPassword(email, password);
    }

    loginFacebook() {
        // return this._fireAuth.auth.signInWithRedirect(
        //     new firebase.auth.FacebookAuthProvider
        // );
        return this._fireAuth.auth.signInWithPopup(
            new firebase.auth.FacebookAuthProvider
        );
    }

    crearCuenta(email: string, password: string) {
        return this._fireAuth.auth.createUserWithEmailAndPassword(email, password);
    }
    cerrarSesion() {
        // return this._fireAuth.auth.signOut();
        return this._fireAuth.auth.signOut().then(() => {
            this._router.navigate(['/login']);
        });
    }

    canActivate() {
        return this.usuario.pipe(
            map(usuario => {

                if (usuario) {
                    return true;
                } else {
                    this._router.navigate(['/login']);
                    return false
                }

            }),
            catchError((err) => {
                this._router.navigate(['/login']); of (false);
                let observable: Observable < boolean > = new Observable();
                return of(false);
            })
        );
    }
}