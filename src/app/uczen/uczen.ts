import { Component, inject } from '@angular/core';
import { UczniowieService } from '../services/uczniowieService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-uczen',
  imports: [],
  templateUrl: './uczen.html',
  styleUrl: './uczen.scss',
})
export class Uczen {

  idUczen?: string | null;
  
  constructor(private uczniowie: UczniowieService) {}

  private uczniowieInject = inject(UczniowieService);

  private router = inject(Router);
  
  private activateRouter = inject(ActivatedRoute);

  ngOnInit() {
    console.log('test');
    
    // this.idUczen = this.activateRouter.snapshot.paramMap.get('id');
    
    this.activateRouter.paramMap.subscribe(idUczen => {
      this.idUczen = idUczen.get('id');
    });
    
    console.log(this.uczniowie.imie);
    console.log(this.uczniowieInject.imie);
    console.log(this.idUczen);
  }

}