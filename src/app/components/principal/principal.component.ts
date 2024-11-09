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


  downloadPDF() {
    const link = document.createElement('a');
    link.href = '/assets/Hoja de vida Alvaro Jimenez.pdf'; 
    link.download = 'Hoja de vida alvaro jimenez.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
