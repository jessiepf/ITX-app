import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PersonalListComponent } from './personal-list/personal-list.component';
import { EditPersonalInfoComponent } from './edit-personal-info/edit-personal-info.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'personal-list' },
  { path: 'create-personal', component: PersonalInfoComponent },
  { path: 'personal-list', component: PersonalListComponent },
  { path: 'personal-edit/:id', component: EditPersonalInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
