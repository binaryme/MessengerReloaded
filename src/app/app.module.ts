import {
    BrowserModule
} from '@angular/platform-browser';
import {
    NgModule
} from '@angular/core';
import {
    FormsModule
} from '@angular/forms';
import {
    ChatsService
} from './services/chats.service';
import {
    ChatService
} from './services/chat.service';
import {
    HttpModule
} from '@angular/http';
import {
    HttpClientModule
} from '@angular/common/http';

import {
    AppComponent
} from './app.component';
import {
    NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import {
    RightBarMessengerComponent
} from './components/rightbarmessenger/rightbarmessenger.component';
import {
    AngularFontAwesomeModule
} from 'angular-font-awesome';
import {
    AppRoutingModule
} from './app-routing.module';
import {
    SidebarConversacionesComponent
} from './components/sidebarconversaciones/sidebarconversaciones.component';
import {
    MensajesComponent
} from './components/mensajes/mensajes.component';
import {
    MessengerComponent
} from './pages/messenger/messenger.component';
import {
    PagenotfoundComponent
} from './pages/pagenotfound/pagenotfound.component';
import {
    MensajesinnerComponent
} from './components/mensajesinner/mensajesinner.component';
import {
    LoginComponent
} from './pages/login/login.component';
import {
    FilterPipe
} from './pipes/filter.pipe';
// firebase
import {
    AngularFireModule
} from 'angularfire2';
import {
    AngularFireDatabaseModule
} from 'angularfire2/database';
import {
    AngularFireAuthModule
} from 'angularfire2/auth';
import {
    environment
} from '../environments/environment';
import {
    ContactoComponent
} from './components/contactos/contacto/contacto.component';
import {
    AgregarComponent
} from './components/contactos/agregar/agregar.component';
import {
    ContactoMensajesComponent
} from './components/contactos/mensajes/mensajes.component';

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
        FilterPipe,
        ContactoComponent,
        AgregarComponent,
        ContactoMensajesComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        AngularFontAwesomeModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase)
    ],
    providers: [ChatsService, ChatService],
    bootstrap: [AppComponent]
})
export class AppModule {}