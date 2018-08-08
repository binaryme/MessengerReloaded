import {
    Component,
    OnInit
} from '@angular/core';
import {
    ChatsService
} from '../../services/chats.service';
import {
    ActivatedRoute
} from '@angular/router';
import {
    Contacto
} from '../../models/contacto.model';
import {
    AuthService
} from '../../services/auth/auth.service';

@Component({
    selector: 'app-messenger',
    templateUrl: './messenger.component.html',
    styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {
    nombre: string;
    convId: number;
    public contactoSeleccion: Contacto;

    public usuario;

    constructor(
        private data: ChatsService,
        private route: ActivatedRoute,
        private _auth: AuthService
    ) {
        this.route.params.subscribe(params => (this.convId = params.id));
        console.log(`${this.convId} lo cargo desde el constructor`);
    }

    mandasteContacto(contacto) {
        this.contactoSeleccion = contacto;
    }

    ngOnInit() {
        this._auth.usuario.subscribe(firebaseUsuario => {
            this.usuario = firebaseUsuario;
        }, err => {
            console.error(err);
        });
        this.route.params.subscribe(params => (this.convId = params.id));
        console.log(`${this.convId} lo cargo desde on init`);
    }
}