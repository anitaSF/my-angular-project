import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Modulo para trabajar con elementos de formulario y activar sus funcionalidades. Importar también en @Component ((imports))
import { HeaderComponent } from './components/header/header.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HeaderComponent, ProjectCardComponent, UserFormComponent, ProjectListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// En tipescript necesitamos indicar el tipo de variable que estamos creando. Para ello junto al nombre se especifica string, number, boolean, object...
// Para definir su valor se insertan en un método constructor() {propiedades_clases}
export class AppComponent {
  personName: string;
  personAge: number;
  isFromMadrid: boolean;
  inputPlaceholder: string;

  constructor() {
    this.personName = 'Ana';
    this.personAge = 37;
    this.isFromMadrid = false;
    this.inputPlaceholder = 'Nombre de usuario';
  }

  // Metodos para modificar valores de variables creadas mediante eventos que se definen en los elementos html. En este caso dar nuevo valor a la variable "personName", en concreto valor vacío para limpiarlo.
  // Los metodos que no devuelven nada deben llevar el argumento ":void"
  cleanPersonName(): void {
    this.personName = "";
  }
}
