import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border:1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

  usuario: Object = { 
    nombre: null,
    apellido: null,
    correo: null,
    pais: "CRI",
    sexo: "Hombre",
    acepta: false
  };

  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },
  {
    codigo: "COL",
    nombre: "Colombia"
  }];

  sexos:string[] = ["Hombre", "Mujer", "Sin definir"];

  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm){
    console.log(forma);
    console.log("valor: ", forma.value);
    console.log("usuario:", this.usuario);
  }

}
