import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/Router';

import {PhotosComponent} from './photos/photos.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';

const APP_ROUTES: Routes = [ 
{path: "", component:AppComponent},     
{path: "home", component:HomeComponent} ,   
{ path: "fotos", component: PhotosComponent},

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);