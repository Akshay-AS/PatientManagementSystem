import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'patients', loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule) },
  { path: 'appointment', loadChildren: () => import('./appointments/appointments.module').then(m => m.AppointmentsModule) },
  { path: '', redirectTo: 'patients', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
