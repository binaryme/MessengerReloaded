import {
    Injectable
} from '@angular/core';
import {
    AngularFireDatabase,
    AngularFireList
} from '../../../../node_modules/angularfire2/database';
import {
    map
} from 'rxjs/operators';
import {
    Contacto
} from '../../models/contacto.model';
import {
    EventListener
} from '../../../../node_modules/@angular/core/src/debug/debug_node';
import {
    AuthService
} from '../auth/auth.service';

// const nombreLista = 'contactos';

@Injectable({
    providedIn: 'root'
})
export class ContactosService {
    public listaContactos: AngularFireList < any > ;

    constructor(private _firebase: AngularFireDatabase, private _auth: AuthService) {
        this._auth.usuario.subscribe(usuario => {
            if (usuario) {
                this.listaContactos = this._firebase.list(`${usuario.uid}/contactos`);
            }
        });
    }

    getAll() {
        //valueChanges()
        return this.listaContactos.snapshotChanges().pipe(
            map(changes =>
                changes.map(c => ({
                    key: c.payload.key,
                    ...c.payload.val() // SPREAD OPERATOR
                }))
            )
        )
    }
    addNew(contacto: Contacto) {
        return this.listaContactos.push(contacto);
    }
    edit(contacto, actualizacion) {
        //this.listaContactos.set(contacto.key, actualizacion)
        return this.listaContactos.update(contacto.key, actualizacion);
    }
    remove(contacto) {
        // realizar un envío a otro servicio
        return this.listaContactos.remove(contacto.key);
    }

}