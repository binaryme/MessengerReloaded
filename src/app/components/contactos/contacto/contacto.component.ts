import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import {
    Contacto
} from '../../../models/contacto.model';
import {
    ContactosService
} from '../../../services/contactos/contactos.service';

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
    @Input('contacto') contacto: Contacto;
    @Output('abrirConversacion') abrirConversacion: EventEmitter < Contacto > = new EventEmitter()
    public editar: Contacto = new Contacto();

    constructor(private _contactos: ContactosService) {}
    ngOnInit() {
        this.getEstado();
        this.editar.nombre = this.contacto.nombre;
    }
    getEstado() {
        this.contacto.estado = 'online';
        setTimeout(() => {
            this.contacto.estado = 'away';
        }, 3000);
    }

    verConversacion() {
        this.contacto.estado = 'Está dándole click';
        this.abrirConversacion.emit(this.contacto);
    }

    eliminar() {
        console.log(this.contacto);
        this._contactos.remove(this.contacto);
    }

    edit() {
        this._contactos.edit(this.contacto, this.editar).then(() => {
            this.editar = new Contacto();
        });
    }
}