import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../../services/chats.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {
  nombre: string;
  convId: number;

  constructor(private data: ChatsService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => (this.convId = params.id));
    console.log(`${this.convId} lo cargo desde el constructor`);
  }

  ngOnInit() {
    this.route.params.subscribe(params => (this.convId = params.id));
    console.log(`${this.convId} lo cargo desde on init`);
  }
}
