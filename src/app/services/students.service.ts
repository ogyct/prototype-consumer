import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Student} from '../models/Student';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class StudentsService {
  private students: Student[] = [];
  private studentsSource = new BehaviorSubject<Student[]>(this.students);
  students$ = this.studentsSource.asObservable();

  constructor(private http: HttpClient) {
  }

  changeStudents(students: Student[]) {
    this.studentsSource.next(students);
  }

  getStudent(name: string) {
    return this.http.get<Student>(environment.url + '/client/student/v1/' + name);
  }

  getStudents() {
    return this.http.get<Student[]>(environment.url + '/client/student/v1/getAllStudents');
  }

  addStudent(student: Student) {
    return this.http.put(environment.url + '/client/student/v1/addStudent', student);
  }

  deleteStudent(id: number) {
    return this.http.delete(environment.url + '/client/student/v1/deleteStudent?id=' + id);
  }



}
