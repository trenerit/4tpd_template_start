import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Uczniowie } from './uczniowie/uczniowie';
import { Nauczyciele } from './nauczyciele/nauczyciele';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Uczniowie, Nauczyciele],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
