import { Component } from '@angular/core';

@Component({
  selector: 'app-nauczyciele',
  imports: [],
  templateUrl: './nauczyciele.html',
  styleUrl: './nauczyciele.scss',
})
export class Nauczyciele {

  admin: boolean = false;

  user: string = '';
  pass: string = 'xksjfkjsdhfdw';

  userError = false;
  passError = false;
  
  clickForm() {
    if(this.user === '') {
      this.userError = true;
    }
    
    if(this.pass == '') {
      this.passError = true;
    }
  }

}
