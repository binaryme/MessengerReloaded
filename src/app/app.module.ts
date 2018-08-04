import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatsService } from './services/chats.service';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RightBarMessengerComponent } from './components/rightbarmessenger/rightbarmessenger.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { SidebarConversacionesComponent } from './components/sidebarconversaciones/sidebarconversaciones.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { MessengerComponent } from './pages/messenger/messenger.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { MensajesinnerComponent } from './components/mensajesinner/mensajesinner.component';
import { LoginComponent } from './pages/login/login.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RightBarMessengerComponent,
    SidebarConversacionesComponent,
    MensajesComponent,
    MessengerComponent,
    PagenotfoundComponent,
    MensajesinnerComponent,
    LoginComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ChatsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
