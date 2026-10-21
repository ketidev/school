import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title: string = 'First Angular Code';
  studentName: string = '';

  addStudent(): void {
    console.log('Add Student');
  }
}
