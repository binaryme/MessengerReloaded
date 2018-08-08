import {
    Injectable
} from '@angular/core';
import {
    AuthService
} from '../auth/auth.service';
import {
    AngularFireDatabase,
    AngularFireList
} from '../../../../node_modules/angularfire2/database';
import {
    Observable
} from 'rxjs';
import {
    map
} from 'rxjs/operators';
import {
    User as firebaseUser
} from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    private _usuario: firebaseUser;
    private _listaContactos: AngularFireList < any[] > ;
    // uid/contactos

    constructor(private _firebase: AngularFireDatabase, private _auth: AuthService) {
        this._auth.usuario.subscribe(usuario => {
            this._usuario = usuario;
            this._listaContactos = this._firebase.list(`${this._usuario.uid}/contactos`);
        })
    }

    getContactos() {
        return this._listaContactos.snapshotChanges().pipe(
            map(changes =>
                changes.map(c => ({
                    key: c.payload.key,
                    ...c.payload.val()
                }))
            )
        )
    }

    postContacto(contacto) {
        return this._listaContactos.push(contacto);
    }
}