import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProcesadosComponent } from './procesados/procesados.component';
import { DetalleComponent } from './detalle/detalle.component';
import { MasterpageComponent } from './masterpage/masterpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'master', component: MasterpageComponent },
  {
    path: 'procesados',
    component: MasterpageComponent,
    children: [{ path: '', component: ProcesadosComponent }],
  },
  {
    path: 'detalle',
    component: MasterpageComponent,
    children: [{ path: '', component: DetalleComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
