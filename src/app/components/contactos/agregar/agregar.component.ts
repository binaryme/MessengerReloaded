import {
    Component,
    OnInit
} from '@angular/core';
import {
    Contacto
} from '../../../models/contacto.model';
import {
    ContactosService
} from '../../../services/contactos/contactos.service';

@Component({
    selector: 'app-contacto-agregar',
    templateUrl: './agregar.component.html',
    styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
    public nuevo: Contacto = new Contacto();
    constructor(private _contactos: ContactosService) {}
    ngOnInit() {}
    guardar() {
        this._contactos.addNew(this.nuevo).then(() => {
            this.nuevo = new Contacto();
        });
    }
}