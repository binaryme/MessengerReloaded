export interface Contacto {
    nombre: string;
    fotografia: string;
    ultimoMensaje: {
        mensaje: string;
        fecha: number
    };
}
export class Contacto {
    constructor() {}
}