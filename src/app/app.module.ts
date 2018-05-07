import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//importar el modulo de form
import { FormsModule } from '@angular/forms';
// importo las animaciones
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{ ToastrModule} from 'ngx-toastr';

//firestore 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { environment } from '../environments/environment';

//mis componentes
import { FincasComponent } from './vistas/fincas/fincas.component';
import { FincaListComponent } from './vistas/fincas/finca-list/finca-list.component';
import { FincaComponent } from './vistas/fincas/finca/finca.component';
import { CuartelesComponent } from './vistas/cuarteles/cuarteles.component';
import { CuartelComponent } from './vistas/cuarteles/cuartel/cuartel.component';
import { CuartelListaComponent } from './vistas/cuarteles/cuartel-lista/cuartel-lista.component';

//mis servicios
import {FincasService} from './services/fincas.service';


@NgModule({
  declarations: [
    AppComponent,   
    FincasComponent,
    FincaListComponent,
    FincaComponent,
    CuartelesComponent,
    CuartelComponent,
    CuartelListaComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.configFirebase),    
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [FincasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
