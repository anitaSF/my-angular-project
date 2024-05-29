import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { PersonComponent } from './components/person/person.component';
import User from './models/User';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HeaderComponent, UserFormComponent, ProjectCardComponent, ProjectListComponent, PersonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// En tipescript necesitamos indicar el tipo de variable que estamos creando. Para ello junto al nombre se especifica string, number, boolean, object...
// Para definir su valor se insertan en un método constructor() {propiedades_clases}
export class AppComponent {

  showProjects: boolean;
  username: string;

  constructor() {
    this.showProjects = true; // Variable creada para mostrar la lista de proyectos en el html mediante una condicion aplicada en un elemento input checkbox, si esta marcado se mostraran, si no se marca, se ocultan
    this.username = ''; // Variable creada para mostrar el dato "user.username" traido desde el elemento hijo
  }


  login(user: User): void {
    console.log('Información de User exportada al componente padre', user);
    this.username = user.userName;
  }
  // Evento creado para mostrar la información (variable array "User") que viene desde su componente hijo <app-user-form></app-user-form>. 
  // Cuando se completa el evento login definido en el .ts del componente hijo, el elemento padre recibirá la información y la mostrará. Sino se completa el evento, no se recibirá nada y el componente padre no mostrará nada
}
