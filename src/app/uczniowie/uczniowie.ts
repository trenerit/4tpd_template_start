import { Component } from '@angular/core';

@Component({
  selector: 'app-uczniowie',
  imports: [],
  templateUrl: './uczniowie.html',
  styleUrl: './uczniowie.scss',
})
export class Uczniowie {

  tabImiona = ['Piotr', 'Anna', 'Włodzimierz', 'Maria'];

  tabUczniowie = [
    {id: 1, imie: 'Piotr', wiek: 18},
    {id: 2, imie: 'Anna', wiek: 16},
    {id: 3, imie: 'Wiktor', wiek: 15},
  ]

  tabImg = [
    {img: 'placeholder1.png', alt: 'alr kjklkj 1'},
    {img: 'placeholder2.png', alt: 'alr kjklkj 2'},
    {img: 'placeholder3.png', alt: 'alr kjklkj 3'}
  ]
  
}
