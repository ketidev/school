import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-add-student-form',
  styleUrl: './add-student-form.css',
  templateUrl: './add-student-form.html',
})
export class AddStudentForm {
  studentName: string = '';
  @Output() addStudent = new EventEmitter<string>();

  onAddStudent(): void {
    const name = this.studentName.trim();

    if (!name) return;

    this.addStudent.emit(name);
    this.studentName = '';
  }
}
