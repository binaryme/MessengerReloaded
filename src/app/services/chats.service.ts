import { Injectable } from '@angular/core';
import { markDirtyIfOnPush } from '../../../node_modules/@angular/core/src/render3/instructions';
import { SourceMapGenerator } from '../../../node_modules/@angular/compiler/src/output/source_map';
import { discardPeriodicTasks } from '../../../node_modules/@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  Conversaciones: any = [
    {
      id: 1,
      id_user: 1,
      image: 'https://goo.gl/qSXiwb',
      nombre: 'Alejandro Cruz',
      mensaje: 'Ya se armó la wasanga',
      fecha: '03:02',
      sendUserId: 1
    },
    {
      id: 2,
      id_user: 2,
      image: 'https://goo.gl/4JKt2D',
      nombre: 'Miss number 1',
      mensaje: 'Cómo te fue',
      fecha: '06:08',
      sendUserId: 1
    },
    {
      id: 3,
      id_user: 3,
      image: 'https://goo.gl/qcpPTG',
      nombre: 'Miss Hair',
      mensaje: 'For reals?',
      fecha: '15:23',
      sendUserId: 1
    },
    {
      id: 4,
      id_user: 4,
      image: 'https://goo.gl/kpPgbF',
      nombre: 'Michael Huevo',
      mensaje: 'Oye ya ven por mi',
      fecha: '11:18',
      sendUserId: 1
    }
  ];
  Mensajes: any[] = [
    {
      _id: 1,
      image: 'https://goo.gl/qSXiwb',
      name: 'Alejandro Cruz',
      mensaje: 'Ya se armó la wasanga',
      date: '03:02',
      sendUserId: 1
    },
    {
      _id: 2,
      image: 'https://goo.gl/qSXiwb',
      name: 'Alejandro Cruz',
      mensaje: 'Ya se armó la wasanga',
      date: '03:02',
      sendUserId: 1
    },
    {
      _id: 3,
      image: 'https://goo.gl/qSXiwb',
      name: 'Alejandro Cruz',
      mensaje: 'Ya se armó la wasanga',
      date: '03:02',
      sendUserId: 1
    }
  ];
  _id: number;
  ListaConversaciones() {
    return this.Conversaciones;
  }
  ListaMensajes() {
    return this.Mensajes;
  }
  addMessage(text: string): void {
    console.log(this.Mensajes);
    const mensaje = {
      id: new Date().getTime(),
      mensaje: text,
      date: new Date()
    };
    this.Mensajes.push(mensaje);
  }
  buscarConversacion(texto: string) {
    const filtroconv = this.Conversaciones.filter(texto => texto);
    console.log(filtroconv);
  }
  // BuscarConversacion(texto: string) {
  //  texto = texto.toLowerCase();
  //  let result: any = [];
  //  for (let conversacion of this.Conversaciones) {
  //    let name = conversacion.name.toLowerCase();
  //    // let autor = chat.autor.toLowerCase();
  //    if (name.indexOf(texto) >= 0) {
  //      result.push(conversacion);
  //    }
  //  }
  //  return result;
  // }
}
