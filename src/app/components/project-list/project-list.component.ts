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
        isPublic: true,
        url: 'https://candeperfumerias.com/'
      },
      {
        id: 2,
        name: 'Gold&Roses',
        category: 'Web Design - Ecommerce',
        year: 2022,
        image: 'https://payload.cargocollective.com/1/17/547114/11639379/ZonaK-gold-roses-web_1600_c.jpg',
        isPublic: true,
        url: 'https://goldandroses.com/'
      },
      {
        id: 3,
        name: 'Amopi Camisetas',
        category: 'IVC - Diseño Gráfico',
        year: 2018,
        image: 'https://payload.cargocollective.com/1/17/547114/8527996/papeleria_905.jpg',
        isPublic: false,
        url: ''
      },
    ]
  }

}
