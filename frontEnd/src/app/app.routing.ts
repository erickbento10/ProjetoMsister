import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PhotosComponent} from './photos/photos.component';
import { HomeComponent } from './home/home/home.component';
import { ProdutosComponent } from './produtos/produtos/produtos.component';
import { ContatosComponent } from './contatos/contatos.component';
import { LoginComponent } from './componentes/login/login.component';


const APP_ROUTES: Routes = [ 
{path: '', component:HomeComponent},     
{path: "home", component:HomeComponent} ,   
{ path: "login", component: LoginComponent},
{ path: "fotos", component: PhotosComponent},
{ path: "produtos", component: ProdutosComponent},
{ path: "contatos", component: ContatosComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(APP_ROUTES);