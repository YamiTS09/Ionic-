import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
  }

  login(juanito: NgForm){
    //obtener valores del formulario
    console.log(juanito.value);

    //validar formulario
    console.log('valid:', juanito.valid)

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
