import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import Project from './models/project';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// En tipescript necesitamos indicar el tipo de variable que estamos creando. Para ello junto al nombre se especifica string, number, boolean, object...
// Para definir su valor se insertan en un método constructor() {propiedades_clases}
export class AppComponent {
  personName: string;
  personAge: number;
  isFromMadrid: boolean;
  cande: Project;

  constructor() {
    this.personName = 'Ana';
    this.personAge = 37;
    this.isFromMadrid = false;

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