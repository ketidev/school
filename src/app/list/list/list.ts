import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-list',
  styleUrl: './list.css',
  templateUrl: './list.html',
})
export class List {
  title: string = 'First Angular Code';
  studentName: string = '';

  count: number = 0;
  students: string[] = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown'];
  selectedIndex: number | null = null;

  addStudent(): void {
    if (this.studentName.trim() != '') {
      this.students.push(this.studentName);
      this.studentName = '';
      this.count = this.students.length;
    }
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
