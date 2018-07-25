import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {StudentsComponent} from './components/students/students.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {StudentsService} from './services/students.service';
import {FormsModule} from '@angular/forms';
import { AddStudentComponent } from './components/add-student/add-student.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
