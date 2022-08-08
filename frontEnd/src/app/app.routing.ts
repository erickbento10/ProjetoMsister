import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/Router';

import {PhotosComponent} from './photos/photos.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { ProdutosComponent } from './produtos/produtos/produtos.component';
import { ContatosComponent } from './contatos/contatos.component';
import { LoginComponent } from './componentes/login/login.component';


const APP_ROUTES: Routes = [ 
{path: "", component:AppComponent},     
{path: "home", component:HomeComponent} ,   
{ path: "fotos", component: LoginComponent},
//{ path: "fotos", component: PhotosComponent},
{ path: "produtos", component: ProdutosComponent},
{ path: "contatos", component: ContatosComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);