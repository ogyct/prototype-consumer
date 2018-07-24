import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentsComponent} from './components/students/students.component';

const routes: Routes = [
  {path: '', redirectTo: '/students' , pathMatch: 'full'},
  {path: 'students', component: StudentsComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],

})
export class AppRoutingModule {
}
