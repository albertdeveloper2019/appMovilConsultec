import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapaUbicacionesPage } from './mapa-ubicaciones.page';

const routes: Routes = [
  {
    path: '',
    component: MapaUbicacionesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MapaUbicacionesPage]
})
export class MapaUbicacionesPageModule {}
