import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-student-item',
  styleUrl: './student-item.css',
  templateUrl: './student-item.html',
})
export class StudentItem {
  @Input() student: string = '';

  @Output() deleteStudent: EventEmitter<void> = new EventEmitter<void>();

  onDelete(): void {
    this.deleteStudent.emit();
  }
}
