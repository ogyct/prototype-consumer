import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {StudentsComponent} from './components/students/students.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {StudentsService} from './services/students.service';
import {FormsModule} from '@angular/forms';
import {AddStudentComponent} from './components/add-student/add-student.component';
import {AuthenticationService} from './services/authentication.service';
import {LoginComponent} from './components/login/login.component';
import {UserService} from './services/user.service';
import {AuthGuardService} from './guards/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AddStudentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StudentsService, AuthenticationService, UserService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
