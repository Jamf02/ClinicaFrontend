import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { EscritorioComponent } from './vistas/escritorio/escritorio.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { PacienteComponent } from './vistas/paciente/paciente.component';
const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'escritorio', component:EscritorioComponent},
  {path:'nuevo', component:NuevoComponent},
  {path:'editar', component:EditarComponent},
  {path:'paciente', component:PacienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
