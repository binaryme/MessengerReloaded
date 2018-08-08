export interface Contacto {
    key ? : string;
    nombre: string;
    fotografia: string;
    correo: string;
    mensajes: Array<Mensaje>;
    estado ? : string;
}

export interface Mensaje {
    texto: string;
}

export class Contacto {
    constructor() {}
}