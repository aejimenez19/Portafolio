import { Component } from '@angular/core';
import { TecnologiasComponent } from '../tecnologias/tecnologias.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TecnologiasComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


  downloadPDF() {
    const link = document.createElement('a');
    link.href = '/assets/Hoja de vida Alvaro Jimenez.pdf'; 
    link.download = 'Hoja de vida alvaro jimenez.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
