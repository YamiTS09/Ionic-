import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  login(juanito: NgForm){
    //obtener valores del formulario
    console.log(juanito.value);

    //validar formulario
    console.log('valid:', juanito.valid)

    //si form es invalido
    //console log ('todos los cambios son requeridos')
    //return
    if(juanito.invalid){
      console.log('Todos los cambios son requeridos');
      return;
    }

    //Si usuario=admin y password=admin
    //Entonces console.log('Login correcto')
    //Sino console.log('Login incorrecto')
    if(this.email==='admin' && this.password==='admin'){
      this.navController.navigateForward('/inicio');
    } 
    else{
      console.log('Login incorrecto')
    }
  }

  

}
