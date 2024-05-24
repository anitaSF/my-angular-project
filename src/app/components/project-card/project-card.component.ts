import { Component } from '@angular/core';
import Project from '../../models/Project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  cande: Project; // El tipo viene dado por la interface de objeto creada en Project.ts para tipar cada una de las propiedades.

  constructor() {
        // La variable objeto dando valor a cada una de sus propiedades definidas en la interface Project
    this.cande = {
      id: 1,
      name: 'Cande Shop',
      category: 'Web Design - Ecommerce',
      year: 2020,
      image: 'https://payload.cargocollective.com/1/17/547114/11639379/ZonaK-cande-web-responsive_1250.jpg',
      isPublic: true

    }
  }
}
