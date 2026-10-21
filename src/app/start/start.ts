import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-start',
  imports: [RouterLink],
  templateUrl: './start.html',
  styleUrl: './start.scss',
})
export class Start {

    private router = inject(Router);

  clickStudent(id: number) {
    this.router.navigate(['uczen', id]);
  }

}
