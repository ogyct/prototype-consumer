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
  students: Student[];

  editMode = false;

  error = false;

  constructor(private studentsService: StudentsService) {

  }

  ngOnInit() {
    this.fetchStudents();
    this.studentsService.students$.subscribe(students => this.students = students);

    // n
  }

  // mapStudent(name: string) {
  //   this.studentsService.getStudent(name).subscribe((data: Student) => {
  //     this.student = data;
  //   });
  // }

  fetchStudents() {
    this.studentsService.getStudents().subscribe((allStudents: Student[]) => {
      this.students = allStudents;
      this.studentsService.changeStudents(this.students);
    }, err => {
      this.error = true;
    });
  }


  deleteStudent(student: Student) {
    this.studentsService.deleteStudent(student.id).subscribe(() => {
      this.students = this.students.filter(item => item !== student);
      this.studentsService.changeStudents(this.students);
    }, err => console.log(err.toLocaleString()));
  }


}
