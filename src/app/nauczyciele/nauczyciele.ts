import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nauczyciele',
  imports: [FormsModule],
  templateUrl: './nauczyciele.html',
  styleUrl: './nauczyciele.scss',
})
export class Nauczyciele {

  admin: boolean = false;

  login: string = '';

  result: string = '';

  userError = false;
  passError = false;
  
  loginFormSubmit(dataFromLoginForm: any) {
    const login = dataFromLoginForm.value.login;
    const pass = dataFromLoginForm.value.pass;

    this.login = dataFromLoginForm.value.login;

    this.userError = false;
    this.passError = false;

    if(login === '') {
      this.userError = true;
      // return;
    }
    
    if(pass === '') {
      this.passError = true;
      // return;
    }

    if(!this.userError && !this.passError) {

      console.log('przeszło');
    
      this.result = `login: ${login}, hasło: ${pass}`;
    }

  }

}
