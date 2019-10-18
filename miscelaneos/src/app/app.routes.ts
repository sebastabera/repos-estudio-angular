import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usuario/:10', component: UsuarioComponent,
      children: [
        { path: 'detalle', component: UsuarioDetalleComponent },
        { path: 'editar', component: UsuarioEditarComponent },
        { path: 'nuevo', component: UsuarioNuevoComponent },
        { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
      ]    
    },
    
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
