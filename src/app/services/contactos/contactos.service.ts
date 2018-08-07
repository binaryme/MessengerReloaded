import {
    Injectable
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import {
    AngularFireDatabase,
    AngularFireList
} from '../../../../node_modules/angularfire2/database';
import {
    Contacto
} from '../../models/contacto.model';

const nombreLista = 'contactos';
const httpApi = 'https://jsonplaceholder.typicode.com/posts';
@Injectable({
    providedIn: 'root'
})
export class ContactosService {
    public listaContactos: AngularFireList < any > ;
    constructor(private _firebase: AngularFireDatabase, private _http: HttpClient) {
        this.listaContactos = this._firebase.list(nombreLista);
    }

    get() {
        return this._http.get(httpApi);
    }
    post(contacto: Contacto) {
        return this._http.post(httpApi, contacto);
    }

    getAll() {
        return this.listaContactos.valueChanges();
    }
    addNew(contacto: Contacto) {
        return this.listaContactos.push(contacto);
    }
    edit(contacto, actualizacion) {
        return this.listaContactos.update(contacto, actualizacion);
    }
    remove(contacto) {
        return this.listaContactos.remove(contacto);
    }

}