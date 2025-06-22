import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  name: string = 'Rafael Ferrari';
  age: number = 23;
  description: string = 'I am a software engineer with a passion for web development and open source contributions.';
}
