import { Component } from '@angular/core';
import Project from '../../models/Project';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  projects: Project[];

  constructor() {
    this.projects = [
      {
        id: 1,
        name: 'Cande Shop',
        category: 'Web Design - Ecommerce',
        year: 2020,
        image: 'https://payload.cargocollective.com/1/17/547114/11639379/ZonaK-cande-web-responsive_1250.jpg',

      },
      {
        id: 1,
        name: 'Cande Shop',
        category: 'Web Design - Ecommerce',
        year: 2020,
        image: 'https://payload.cargocollective.com/1/17/547114/11639379/ZonaK-cande-web-responsive_1250.jpg',

      },
      {
        id: 1,
        name: 'Cande Shop',
        category: 'Web Design - Ecommerce',
        year: 2020,
        image: 'https://payload.cargocollective.com/1/17/547114/11639379/ZonaK-cande-web-responsive_1250.jpg',

      },
    ]
  }

}
