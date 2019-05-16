import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './paginas/login/login.module#LoginPageModule' },
  { path: 'login/mapa-ubicaciones', loadChildren: './paginas/mapa-ubicaciones/mapa-ubicaciones.module#MapaUbicacionesPageModule' },
  { path: 'mapa-ruta/:id', loadChildren: './paginas/mapa-ruta/mapa-ruta.module#MapaRutaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
