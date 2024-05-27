import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Modulo para trabajar con elementos de formulario y activar sus funcionalidades. Importar también en @Component ((imports))

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})

export class PersonComponent {
  personName: string;
  personAge: number;
  isFromMadrid: boolean;
  inputPlaceholder: string;
  myId: string;

  constructor() {
    this.personName = 'Ana';
    this.personAge = 37;
    this.isFromMadrid = false;
    this.inputPlaceholder = 'Nombre de usuario';
    this.myId = 'patata';
  }

  // Metodos para modificar valores de variables creadas mediante eventos que se definen en los elementos html. En este caso dar nuevo valor a la variable "personName", en concreto valor vacío para limpiarlo.
  // Los metodos que no devuelven nada deben llevar el argumento ":void"
  cleanPersonName(): void {
    this.personName = "";
  }
}
