import { Component } from '@angular/core';
import User from '../../models/User';
import { FormsModule } from '@angular/forms'; // Importamos módulo para activar funcionalidades de formularios

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  user: User;

  constructor() {
    this.user = {
      userName: '',
      email: '',
      password: '',
    }
  }



  handleLogin(e: Event): void {
    e.preventDefault(); // Cuando creemos métodos que se deben activar con un evento "submit" aplicado en un elemento html, debemos prevenir el comportamiento por defecto (por defecto, los "submit" recargan el formulario sin ejecutar el código indicado en la función o método que llama). Para ello debemos incluir el argumento "(e: Event)" y el método "e.preventDefault()" en el código a ejecutar de la función.

    const pass = 'myPassword';

    if (this.user.password === pass) {
      console.log('El usuario ha hecho login: ', this.user);
    } else {
      console.log('Ha introducido contraseña errónea');
    }

  }
}
