import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tecnologias',
  standalone: true,
  imports: [],
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.css'
})
export class TecnologiasComponent {
  @Input() title?: String;
  @Input() img?: String;
}
