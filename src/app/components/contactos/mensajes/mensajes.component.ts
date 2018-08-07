import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import {
    Contacto
} from '../../../models/contacto.model';

@Component({
    selector: 'app-contacto-mensajes',
    templateUrl: './mensajes.component.html',
    styleUrls: ['./mensajes.component.css']
})
export class ContactoMensajesComponent implements OnInit {
    @Input('contacto') contactoSeleccionado: Contacto;
    constructor() {}
    ngOnInit() {}

}