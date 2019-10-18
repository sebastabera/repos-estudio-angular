import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
   AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ullam mollitia 
    error culpa officia? Amet unde, aliquid voluptate at vitae
     maiores repellat quibusdam provident necessitatibus quo a consectetur est nulla!</p>

    <app-clases></app-clases>

    <p [appResaltado]="'red'">Hola mundo</p>

    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit() {
  console.log('ngOnInit');  
  }

  ngOnChanges(){
    console.log('ngOnChanges');
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }




}
