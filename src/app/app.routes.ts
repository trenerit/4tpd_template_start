import { Routes } from '@angular/router';
import { Start } from './start/start';
import { Uczniowie } from './uczniowie/uczniowie';
import { Nauczyciele } from './nauczyciele/nauczyciele';

export const routes: Routes = [
    {path: '', pathMatch:'full', redirectTo: 'start'},
    {path: 'start', component: Start},
    {path: 'uczniowie', component: Uczniowie},
    {path: 'nauczyciele', component: Nauczyciele},
];
