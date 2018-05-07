import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
//firestore 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FincasComponent } from './vistas/fincas/fincas.component';
import { FincaListComponent } from './vistas/fincas/finca-list/finca-list.component';
import { FincaComponent } from './vistas/fincas/finca/finca.component';
import { CuartelesComponent } from './vistas/cuarteles/cuarteles.component';
import { CuartelComponent } from './vistas/cuarteles/cuartel/cuartel.component';
import { CuartelListaComponent } from './vistas/cuarteles/cuartel-lista/cuartel-lista.component';



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
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
