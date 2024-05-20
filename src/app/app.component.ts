import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// En tipescript necesitamos indicar el tipo de variable que estamos creando. Para ello junto al nombre se especifica string, number, object
export class AppComponent {
  username: string = 'Anita';
}
