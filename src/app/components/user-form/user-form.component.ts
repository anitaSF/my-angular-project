import { Component } from '@angular/core';
import User from '../../models/User';
import { FormsModule } from '@angular/forms';  // Modulo para trabajar con elementos de formulario y activar sus funcionalidades. Importar también en @Component ((imports))

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

  // Se crean las variables vacías porque van a recibir el valor del formulario html creado. Cada input estará relacionado con una variable gracias al FormsModule



  handleLogin(e: Event): void {
    e.preventDefault(); // Cuando creemos métodos que se deben activar con un evento "submit" aplicado en un elemento html, debemos prevenir el comportamiento por defecto (por defecto, los "submit" recargan el formulario sin ejecutar el código indicado en la función o método que llama). Para ello debemos incluir el argumento "(e: Event)" y el método "e.preventDefault()" en el código a ejecutar de la función.

    const pass = 'myPassword'; // Creamos esta contraseña como ejemplo para que se pueda ejecutar la condicion, pero normalmente vendrá de una API o base de datos

    if (this.user.password === pass) {
      console.log('El usuario ha hecho login: ', this.user);
    } else {
      console.log('Ha introducido contraseña errónea');
    }

  }
}
