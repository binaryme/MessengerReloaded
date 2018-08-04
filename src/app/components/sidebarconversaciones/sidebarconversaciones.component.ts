import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../../services/chats.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sidebarconversaciones',
  templateUrl: './sidebarconversaciones.component.html',
  styleUrls: ['./sidebarconversaciones.component.scss']
})
export class SidebarConversacionesComponent implements OnInit {
  listaDeConversaciones: any;
  texto: string;
  constructor(private chatservice: ChatsService, private router: Router) {}
  ngOnInit() {}
  getListaDeConversaciones() {
    this.listaDeConversaciones = this.chatservice.ListaConversaciones();
    return this.listaDeConversaciones;
  }
  goToConversation(id: number) {
    console.log(id);
    this.router.navigate(['/inbox', id]);
  }
  buscarConversaciones(texto) {
    console.log(texto);
    // this.listaDeConversaciones = this.chatservice.buscarConversacion(texto);
  }
}
