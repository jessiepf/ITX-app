import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PersonalListComponent } from './personal-list/personal-list.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'personal-list' },
  { path: 'create-personal', component: PersonalInfoComponent },
  { path: 'personal-list', component: PersonalListComponent },
  // { path: 'employee-edit/:id', component: EmployeeEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
