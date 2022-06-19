import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/Router';

import {PhotosComponent} from './photos/photos.component';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [ 
{path: "Home", component:AppComponent} ,   
{ path: "fotos", component: PhotosComponent},

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);