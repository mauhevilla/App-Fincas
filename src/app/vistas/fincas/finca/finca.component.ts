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
  selector: 'app-finca',
  templateUrl: './finca.component.html',
  styleUrls: ['./finca.component.css']
})
export class FincaComponent implements OnInit {

  constructor(private servFinca:FincasService,
              private toast : ToastrService ) { }

  ngOnInit() {
    this.servFinca.getFincas();
    this.resetForm();
  }

  onSubmit(fincaForm : NgForm){
    if(fincaForm.value.$key == null){
      this.servFinca.insertFinca(fincaForm.value)  ;
      this.toast.success('Operacion Agregar','Finca Grabado');
    }     
    else{
      this.servFinca.updateFinca(fincaForm.value);
      this.toast.success('Operacion Modificar','Producto Actualizado');
    }     
    
    this.resetForm(fincaForm);
    
  }


  resetForm(fincaForm ?: NgForm){
    if(fincaForm != null)
    fincaForm.reset();
    this.servFinca.fincaSelect=new FincaDb();
}


}
