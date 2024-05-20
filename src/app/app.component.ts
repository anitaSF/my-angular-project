import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { GreetingsComponent } from './components/greetings/greetings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, GreetingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// En tipescript necesitamos indicar el tipo de variable que estamos creando. Para ello junto al nombre se especifica string, number, object
export class AppComponent {
}
