import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/Router';

import {PhotoComponent} from './photo/photo.component';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [ 
{path: "Home", component:AppComponent} ,   
{ path: "Fotos", component: PhotoComponent},

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);