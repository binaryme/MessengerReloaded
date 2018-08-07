export interface Contacto {
    key ? : string;
    nombre: string;
    fotografia: string;
    correo: string;
    ultimoMensaje: {
        mensaje: string;
        fecha: number
    };
    estado ? : string;
}
export class Contacto {
    constructor() {}
}