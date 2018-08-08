import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import {
    ChatsService
} from '../../services/chats.service';
import {
    Contacto
} from '../../models/contacto.model';

@Component({
    selector: 'app-mensajes',
    templateUrl: './mensajes.component.html',
    styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
    @Input('contactoSeleccionado') contactoSeleccionado: Contacto;
    mensajes: any[];
    mensaje: string;
    constructor(private chatservice: ChatsService) {}
    ngOnInit() {}
    getListaDeMensajes() {
        this.mensajes = this.chatservice.ListaMensajes();
        return this.mensajes;
    }
    sendMessage() {
        // this.chatservice.addMessage(this.mensaje);
        // this.mensaje = '';
    }
}