export class FincaDb {
    $key :string ;
    nombre      : string;
    direccion   :string;
    propietario :string;
    avaluo      :number;
    cuarteles?:[{keyFinca :String}];
    gastos ?:[{fecha :String,motivo :string,importe :number}];
}
