import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

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
        'apellido': new FormControl(this.usuario.nombrecompleto.apellido, [Validators.required, this.noHerrera])}),      
      'correo': new FormControl(this.usuario.correo, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', [Validators.required]),
        new FormControl('Dormir', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.existeUsuario),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    });

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.esIgual.bind(this.forma)
    ]);

    //funcion que permite observar cuando hay un cambio en un elemento
    this.forma.controls['username'].valueChanges
      .subscribe( data => {
        console.log(data);
      });

    this.forma.controls['username'].statusChanges
      .subscribe( data => {
        console.log(data);
      });

    //this.forma.setValue(this.usuario);
  }

  ngOnInit() {
  }

  guardarCambios(){
    console.log(this.forma.value);
    //this.forma.reset(this.usuario);
    // this.forma.reset({
    //   nombrecompleto: {
    //     nombre: "",
    //     apellido: ""
    //   },
    //   correo: ""
    // });

  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('Comer', Validators.required));
  }

  noHerrera(control:FormControl):{[s:String]:boolean}{
    if(control.value == 'herrera'){
      return {
        noHerrera: true
      }
    }
    return null;
  }

  esIgual(control:FormControl):{[s:String]:boolean}{
    let forma:any = this;
    if(control.value!=forma.controls['password1'].value){
      return{
        esIgual: true
      }
    }
    return null;
  }

  existeUsuario(control:FormControl):Promise<any>|Observable<any{
    let promesa = new Promise(
      (resolve, rejected) => {
        setTimeout(()=>{
          if(control.value == 'strider'){
            resolve({existe:true});
          } else {
            resolve(null);
          }
        }, 3000)
      }
    );

    return promesa;
  }

}
