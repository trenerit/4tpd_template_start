import { Component } from '@angular/core';
import { Uczniowie } from '../services/uczniowie';

@Component({
  selector: 'app-uczen',
  imports: [],
  templateUrl: './uczen.html',
  styleUrl: './uczen.scss',
})
export class Uczen {

  idUczen?: number;
  
  constructor(private uczniowie: Uczniowie) {}

  ngOnInit() {
    console.log('test');
    this.idUczen = 2;
    console.log(this.uczniowie.imie);
  }

}
