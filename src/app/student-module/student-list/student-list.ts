import { Component } from '@angular/core';
import { AddStudentForm } from '../add-student-form/add-student-form';
import { StudentItem } from '../student-item/student-item';

@Component({
  imports: [AddStudentForm, StudentItem],
  selector: 'app-student-list',
  styleUrl: './student-list.css',
  templateUrl: './student-list.html',
})
export class StudentList {
  title: string = 'First Angular Code';

  count: number = 0;
  students: string[] = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown'];
  selectedIndex: number | null = null;

  addStudent(name: string): void {
    this.students.push(name);
    this.count = this.students.length;
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
