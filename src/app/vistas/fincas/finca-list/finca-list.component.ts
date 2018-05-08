import { Component, OnInit } from '@angular/core';
// import Service
import {FincasService } from '../../../services/fincas.service';
// import la clases
import { FincaDb } from '../../../models/finca-db';
// impor ngForm
import { NgForm} from '@angular/forms';
// impor toaster para mensajes
import { ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-finca-list',
  templateUrl: './finca-list.component.html',
  styleUrls: ['./finca-list.component.css']
})
export class FincaListComponent implements OnInit {

  fincaList : FincaDb[];

  constructor(private servicioFincas:FincasService,
    private toast : ToastrService ) { }

  ngOnInit() {
    return this.servicioFincas.getFincas()
    .snapshotChanges()
    .subscribe(item => {
      this.fincaList=[];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"]=element.key;
        this.fincaList.push(x as FincaDb);
      });
    });
  }

  onEdit(finca : FincaDb){
    this.servicioFincas.fincaSelect = Object.assign({},finca) ;
  }

  onDelete($key:string){
    if(confirm('Esta seguro de querer Eliminarlo ?')){
      this.servicioFincas.deletFinca($key);
      this.toast.success('Successfull Operation','Finca Elimnada ...');
    }
    
  }

}
