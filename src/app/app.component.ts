import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { PersonComponent } from './components/person/person.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HeaderComponent, ProjectCardComponent, UserFormComponent, ProjectListComponent, PersonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// En tipescript necesitamos indicar el tipo de variable que estamos creando. Para ello junto al nombre se especifica string, number, boolean, object...
// Para definir su valor se insertan en un método constructor() {propiedades_clases}
export class AppComponent {

  showProducts: boolean;

  constructor() {
    this.showProducts = true;
  }
  // Variable creada para mostrar la lista de proyectos en el html mediante una condicion aplicada en un elemento input checkbox, si esta marcado se mostraran, si no se marca, se ocultan
}
