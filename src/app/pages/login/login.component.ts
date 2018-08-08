import {
    Component,
    OnInit
} from '@angular/core';
import {
    AuthService
} from '../../services/auth/auth.service';
import {
    Router
} from '../../../../node_modules/@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public email: string;
    public password: string;
    public error: string;

    constructor(private _auth: AuthService, private _router: Router) {}

    ngOnInit() {}

    iniciarSesion() {
        this._auth
            .iniciarSesion(this.email, this.password)
            .then(() => {
                this._router.navigate(['/']);
            })
            .catch(err => {
                console.log(err);
                this.error = 'Ocurrió un error al iniciar sesión';
            })
    }

    iniciarSesionConFacebook() {
        this._auth
            .loginFacebook()
            .then((facebook) => {
                console.log(facebook);
                if (facebook) {
                    this._router.navigate(['/']);
                }
            })
            .catch(err => {
                console.error(err);
            });
    }

    crearCuenta() {
        // PruebaPrueba
        this._auth
            .crearCuenta(this.email, this.password)
            .then(() => {
                this._router.navigate(['/'])
            })
            .catch(err => {
                console.log(err);
                this.error = 'Ocurrió un error al crear tu cuenta';
            })
    }

}