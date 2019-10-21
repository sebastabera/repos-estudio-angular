import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { getMaxListeners } from 'cluster';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma:FormGroup;

  usuario:any = {
    nombrecompleto: {
      nombre: 'Sebastian',
      apellido: 'Tabera'
    },
    correo: 'luis@gmail.com',
    //pasatiempos: ["Correr", "Dormir", "Comer"]
  }

  constructor() { 
    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl(this.usuario.nombrecompleto.nombre, [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl(this.usuario.nombrecompleto.apellido, Validators.required)}),      
      'correo': new FormControl(this.usuario.correo, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', [Validators.required]),
        new FormControl('Dormir', Validators.required)
      ])
    });

    //this.forma.setValue(this.usuario);
  }

  ngOnInit() {
  }

  guardarCambios(){
    console.log(this.forma.value);
    //this.forma.reset(this.usuario);
    this.forma.reset({
      nombrecompleto: {
        nombre: "",
        apellido: ""
      },
      correo: ""
    });

  }

}
