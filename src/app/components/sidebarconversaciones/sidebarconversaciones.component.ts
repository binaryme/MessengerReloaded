import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    Input
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
import {
    AuthService
} from '../../services/auth/auth.service';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
    selector: 'app-sidebarconversaciones',
    templateUrl: './sidebarconversaciones.component.html',
    styleUrls: ['./sidebarconversaciones.component.scss']
})
export class SidebarConversacionesComponent implements OnInit {
    @Input('usuario') usuario;
    @Output('mandaContacto') mandaContacto: EventEmitter < Contacto > = new EventEmitter();
    listaContactos: any;
    listaPublicaciones: Array < any > ;
    texto: string;
    contactoSeleccionado: Contacto;
    constructor(
        private chatservice: ChatsService,
        private router: Router,
        private _contactos: ContactosService,
        private _auth: AuthService,
        private _usuarioService : UsuarioService
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
        this.mandaContacto.emit(contacto);
        // this.router.navigate(['/inbox', contacto.key]);
    }

    cerrarSesion() {
        this._auth.cerrarSesion();
    }

    buscarConversaciones(texto) {
        console.log(texto);
        // this.listaDeConversaciones = this.chatservice.buscarConversacion(texto);
    }
}