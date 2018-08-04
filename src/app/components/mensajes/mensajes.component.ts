import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../../services/chats.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
  mensajes: any[];
  mensaje: string;
  constructor(private chatservice: ChatsService) {}

  ngOnInit() {}
  getListaDeMensajes() {
    this.mensajes = this.chatservice.ListaMensajes();
    return this.mensajes;
  }
  sendMessage() {
    this.chatservice.addMessage(this.mensaje);
    this.mensaje = '';
  }
}
