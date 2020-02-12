import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form){
    border: 1px solid red;
  }`]
})
export class TemplateComponent  {

  // tslint:disable-next-line:ban-types
  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: null,
    sexo: 'Hombre',
    acepta: false
  };

  // tslint:disable-next-line:ban-types
pais: Object = [{
  codigo: 'CRI',
  nombre: 'Costa Rica'
},
{
  codigo: 'ESP',
  nombre: 'España'
}];

sexos: string[] = ['Hombre', 'Mujer', 'Sin Definir'];

  constructor() { }


  guardar(forma: NgForm) {
    console.log('Formulario posteado');
    console.log(forma);
  }

}
