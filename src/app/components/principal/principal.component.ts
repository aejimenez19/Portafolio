import { Component } from '@angular/core';
import { TecnologiasComponent } from '../tecnologias/tecnologias.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [TecnologiasComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
