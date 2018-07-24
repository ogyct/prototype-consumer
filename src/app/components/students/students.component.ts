import {Component, OnInit} from '@angular/core';
import {StudentsService} from '../../services/students.service';
import {Student} from '../../models/Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  student: Student = {
    passportNumber: '',
    name: '',
    id: null
  };
  students: Student[] = [];

  constructor(private studentsService: StudentsService) {
  }

  ngOnInit() {
    this.mapStudents();
  }

  // mapStudent(name: string) {
  //   this.studentsService.getStudent(name).subscribe((data: Student) => {
  //     this.student = data;
  //   });
  // }

  mapStudents() {
    this.studentsService.getStudents().subscribe((allStudents: Student[]) => {
      this.students = allStudents;
    }, err => {
      console.log(err.toLocaleString());
    });
  }

  addStudent(student: Student) {
    this.studentsService.addStudent(student).subscribe((addedStudent: Student) => {
      this.students.push(addedStudent);
    }, err => {
      console.log(err.toLocaleString());
    });
  }

  deleteStudent(student: Student) {
    this.studentsService.deleteStudent(student.id).subscribe(() => {
      this.students = this.students.filter(item => item !== student);
    }, err => console.log(err.toLocaleString()));
  }


}
