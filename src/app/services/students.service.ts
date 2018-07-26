import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Student} from '../models/Student';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {UserService} from './user.service';

@Injectable()
export class StudentsService {
  private students: Student[] = [];
  private studentsSource = new BehaviorSubject<Student[]>(this.students);
  students$ = this.studentsSource.asObservable();
  private httpOptions: { headers: HttpHeaders };

  constructor(private http: HttpClient,
              private userService: UserService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userService.accessToken
      })
    };
  }

  changeStudents(students: Student[]) {
    this.studentsSource.next(students);
  }

  getStudent(name: string) {
    return this.http.get<Student>(environment.url + '/client/student/v1/' + name, this.httpOptions);
  }

  getStudents() {
    return this.http.get<Student[]>(environment.url + '/client/student/v1/getAllStudents', this.httpOptions);
  }

  addStudent(student: Student) {
    return this.http.put(environment.url + '/client/student/v1/addStudent', student, this.httpOptions);
  }

  deleteStudent(id: number) {
    return this.http.delete(environment.url + '/client/student/v1/deleteStudent?id=' + id, this.httpOptions);
  }


}
