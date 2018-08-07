import {
    Component,
    OnInit
} from '@angular/core';
import {
    ChatsService
} from '../../services/chats.service';
import {
    RouterModule,
    Router
} from '@angular/router';
import {
    ContactosService
} from '../../services/contactos/contactos.service';
import {
    Contacto
} from '../../models/contacto.model';

@Component({
    selector: 'app-sidebarconversaciones',
    templateUrl: './sidebarconversaciones.component.html',
    styleUrls: ['./sidebarconversaciones.component.scss']
})
export class SidebarConversacionesComponent implements OnInit {
    listaContactos: any;
    listaPublicaciones: Array < any > ;
    texto: string;
    contactoSeleccionado: Contacto;
    constructor(
        private chatservice: ChatsService,
        private router: Router,
        private _contactos: ContactosService
    ) {}

    ngOnInit() {
        this.getListaContactos();
    }
    getListaContactos() {
        this._contactos.getAll().subscribe(contactos => {
            this.listaContactos = contactos;
        });
        // this.listaDeConversaciones = this.chatservice.ListaConversaciones();
        // return this.listaDeConversaciones;
    }

    goToConversation(contacto: Contacto) {
        this.contactoSeleccionado = contacto;
        // this.router.navigate(['/inbox', contacto.key]);
    }

    buscarConversaciones(texto) {
        console.log(texto);
        // this.listaDeConversaciones = this.chatservice.buscarConversacion(texto);
    }
}