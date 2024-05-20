import { Component } from '@angular/core';
import { GreetingsComponent } from '../greetings/greetings.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [GreetingsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
