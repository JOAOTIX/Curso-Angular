import { Routes } from '@angular/router';
import { Especialidades } from './componentes/especialidades/especialidades';
import { Medicos } from './componentes/medicos/medicos';
import { Pacientes} from './componentes/pacientes/pacientes';
import { RegistroPaciente } from './componentes/registro-paciente/registro-paciente';

export const routes: Routes = [
  { path: 'especialidades', component: Especialidades },
  { path: 'medicos/:codes/:costo', component: Medicos },
  { path: 'pacientes/:codmed/:costo', component: Pacientes },
  { path: 'registro-paciente/:codmed/:costo', component: RegistroPaciente },
  { path: '', redirectTo: 'especialidades', pathMatch: 'full' }
];
