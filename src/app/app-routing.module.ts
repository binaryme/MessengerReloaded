import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessengerComponent } from './pages/messenger/messenger.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { MensajesinnerComponent } from './components/mensajesinner/mensajesinner.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: MessengerComponent },
  { path: 'inbox/:id', component: MensajesinnerComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
