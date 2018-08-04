import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  private chats: any = [
    {
      id: 1,
      image: 'https://goo.gl/qSXiwb',
      name: 'Alejandro Cruz',
      message: 'Ya se armó la wasanga',
      date: '03:02',
      sendUserId: 1
    },
    {
      id: 2,
      image: 'https://goo.gl/4JKt2D',
      name: 'Miss number 1',
      message: 'Cómo te fue',
      date: '06:08'
    },
    {
      id: 3,
      image: 'https://goo.gl/qcpPTG',
      name: 'Miss Hair',
      message: 'For reals?',
      date: '15:23'
    },
    {
      id: 4,
      image: 'https://goo.gl/kpPgbF',
      name: 'Michael Huevo',
      message: 'Oye ya ven por mi',
      date: '11:18'
    }
  ];
  private messages: any = [
    {
      id: 1,
      message: 'Ya se armó la wasanga',
      date: '17:23',
      sendUserId: 1
    },
    {
      id: 2,
      message: 'Eso dices tú',
      date: '15:23',
      sendUserId: 1
    },
    {
      id: 3,
      message: 'Mensaje 3',
      date: '1:00',
      sendUserId: 2
    }
  ];
  private _id: number;
  constructor() {
    this._id = 4;
  }

  addMessage(text: string): void {
    console.log(this.messages);
    const message = {
      id: this._id,
      message: text,
      date: new Date()
    };
    this.messages.push(message);
    this._id++;
  }
  getMessages() {
    return this.messages;
  }
  getMessagesByUserId(id: number) {
    let result: any = null;
    for (let message of this.messages) {
      if (message.sendUserId == id) {
        result = message;
      }
    }
  }
  getChats() {
    return this.chats;
  }

  getChatsByName(texto: string) {
    texto = texto.toLowerCase();
    let result: any = [];
    for (let chat of this.chats) {
      let name = chat.name.toLowerCase();
      // let autor = chat.autor.toLowerCase();
      if (name.indexOf(texto) >= 0) {
        result.push(chat);
      }
    }
    return result;
  }
  // voy a agarrar mi chat por el id de usuario en el que me encuentro
  // para eso ocupo agarrar el id en el que me encuentro en la ruta y usarlo para filtrar
  // mis usuarios
  getChatById(id: number) {
    let result: any = null;
    for (let chat of this.chats) {
      if (chat.id == id) {
        result = chat;
      }
    }
    return result;
  }
}
