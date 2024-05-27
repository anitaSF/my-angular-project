import { Component, Input } from '@angular/core';
import Project from '../../models/Project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() // Utilizamos el metodo @Input para importar los valores de una variable creada en un componente padre, tipada con el mismo modelo, y asi no repetir de nuevo el código del array con todos los objetos
  project: Project; // El tipo viene dado por la interface de objeto creada en Project.ts para tipar cada una de las propiedades.

  constructor() {
    // La variable objeto dando valor a cada una de sus propiedades definidas en la interface Project
    this.project = {
      id: 0,
      name: '',
      category: '',
      year: 0,
      image: '',

    }
  }
}
