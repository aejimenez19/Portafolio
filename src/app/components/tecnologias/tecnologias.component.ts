import { Component, Input } from '@angular/core';
import { TitleComponent } from '../utils/title/title.component';

@Component({
  selector: 'app-tecnologias',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.css'
})
export class TecnologiasComponent {
}
