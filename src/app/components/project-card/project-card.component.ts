import { Component, Input } from '@angular/core'; // Añadir "Input" para que funcione el método "@Input()" definido abajo con la variable array "project"

import { NgClass } from '@angular/common'; // Importar "NgClass" para poder utilizar las clases dinámicas en el html, y que un elemento coja el estilo dado en una clase css cuando una variable tenga "x" valor
import Project from '../../models/Project';


@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() // Utilizamos el metodo @Input para importar los valores de una variable creada en un componente padre, tipada con el mismo modelo. Se tiene que importar arriba en "import"
  project: Project; // El tipo viene dado por la interface de objeto creada en Project.ts para tipar cada una de las propiedades.

  constructor() {
    // La variable objeto, mostrada en el componente padre no renderizará estos valores, sino los importados desde el array definido en el .ts del objeto padre.
    // Pero si se utiliza este componente dentro de otro o directamente en el componente raíz, renderizará el array con estos valores definidos en su .ts
    this.project = {
      id: 1,
      name: 'Cande',
      category: 'Web Design - Ecommerce',
      year: 2020,
      image: 'https://payload.cargocollective.com/1/17/547114/11639379/ZonaK-cande-web-responsive_1250.jpg',
      isPublic: true,
      url: 'https://candeperfumerias.com/'
    }
  }



}
