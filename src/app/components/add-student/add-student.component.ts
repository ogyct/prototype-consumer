import {Component, OnInit} from '@angular/core';
import {StudentsService} from '../../services/students.service';
import {Student} from '../../models/Student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  students: Student[] = [];
  student: Student = {
    passportNumber: '',
    name: '',
    id: null
  };

  constructor(private studentsService: StudentsService) {
  }

  ngOnInit() {
    this.studentsService.students$.subscribe(students => this.students = students);
  }

  addStudent(student: Student) {
    this.studentsService.addStudent(student).subscribe((addedStudent: Student) => {
      this.students.push(addedStudent);
      this.studentsService.changeStudents(this.students);
    }, err => {
      console.log(err.toLocaleString());
    });
  }

}
