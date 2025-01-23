import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email: string = 'sandra09@gmail.com';
  password: string = '';

  constructor() { }

  ngOnInit() {
  }
  
  login(){
    //Si usuario=admin y password=admin
    //Entonces console.log('Login correcto')
    //Sino console.log('Login incorrecto')
    if(this.email==='admin' && this.password==='admin'){
      console.log('Login correcto')
    } 
    else{
      console.log('Login incorrecto')
    }
  }

  

}
