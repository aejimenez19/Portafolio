import { Component } from '@angular/core';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-introduccion',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './introduccion.component.html',
  styleUrl: './introduccion.component.css'
})
export class IntroduccionComponent {

}
