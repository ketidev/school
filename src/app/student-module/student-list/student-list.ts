import { Component } from '@angular/core';
import { AddStudentForm } from '../add-student-form/add-student-form';

@Component({
  imports: [AddStudentForm],
  selector: 'app-student-list',
  styleUrl: './student-list.css',
  templateUrl: './student-list.html',
})
export class StudentList {
  title: string = 'First Angular Code';
  studentName: string = '';

  count: number = 0;
  students: string[] = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown'];
  selectedIndex: number | null = null;

  addStudent(name: string): void {
    this.students.push(name);
    this.count = this.students.length;
    console.log(this.count, this.students);
  }

  confirmDelete(index: number): void {
    this.selectedIndex = index;
  }

  removeStudent(): void {
    if (this.selectedIndex != null) {
      this.students.splice(this.selectedIndex, 1);
      this.count = this.students.length;
      this.selectedIndex = null;
    }
  }

  cancelDelete(): void {
    this.selectedIndex = null;
  }
}
