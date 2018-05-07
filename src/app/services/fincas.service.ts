import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { FincaDb} from '../models/finca-db';


@Injectable()
export class FincasService {

  fincasList :AngularFireList<any>;
  fincaSelect : FincaDb;

  constructor(private firebase :AngularFireDatabase ) { }

  // mis metodos
  getFincas(){
    return this.fincasList=this.firebase.list('fincaDb');
  }


  insertFinca(finca :FincaDb){
    this.fincasList.push({
      nombre :finca.nombre,
      direccion:finca.direccion,
      propietario:finca.propietario,
      avaluo:finca.avaluo
    });
  }
  updateFinca(finca :FincaDb){
    this.fincasList.update(finca.$key,{
      nombre :finca.nombre,
      direccion:finca.direccion,
      propietario:finca.propietario,
      avaluo:finca.avaluo
    });   
  }
  deletFinca($key:string){
    this.fincasList.remove($key);
  }


}
