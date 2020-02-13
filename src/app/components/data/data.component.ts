import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styles: []
})
export class DataComponent {
  forma: FormGroup;
  usuario: object = {
    nombrecompleto: {
      nombre: "juan",
      apellido: "torres"
    },
    correo: "JUANTM@gmail.com",
/*     pasatiempos: ['Correr','Dormir','Comer']
 */  };

  constructor() {
    this.forma = new FormGroup({
      nombrecompleto: new FormGroup({
        nombre: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl('', Validators.required)
      }),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
      ]),
      pasatiempos: new FormArray([
          new FormControl('Correr', Validators.required)
      ]),
      password1: new FormControl('', Validators.required),
      password2: new FormControl()
    });
    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind( this.forma )
    ])
/*     this.forma.setValue(this.usuario);
 */  }

 noIgual(control: FormControl):{[s:string]:boolean}{
   let forma: any = this;
   if (control.value === forma.controls['password1'].value) {
     return{
       noiguales: true
     }
   }
   return null;
 }


 agregarPasatiempo() {
   (this.forma.controls.pasatiempos as FormArray).push(
     new FormControl('', Validators.required)
   )
 }

  guardarCambios() {
    console.log(this.forma.value);
    this.forma.reset(this.usuario);
    this.forma.reset({
      nombrecompleto: {
        nombre: '',
        apellido: ''
      },
      correo: ''
    });
  }
}
