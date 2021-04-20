import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';  //libreria importata
import { SocketService } from './socket.service';
import { CesarService } from './cesar.service';
import { CryptoService } from './crypto.service';
import { FormsModule } from '@angular/forms';

const config: SocketIoConfig = { url: 'http://127.0.0.1:3000/', options: {} };  //url del server

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config), //anche qui
    FormsModule
  ],
  providers: [SocketService, CesarService, CryptoService],  //aggiunti i service
  bootstrap: [AppComponent]
})
export class AppModule { }
