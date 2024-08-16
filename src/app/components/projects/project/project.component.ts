import { Component, Input } from '@angular/core';
import { TecnologiasComponent } from '../../tecnologias/tecnologias.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [TecnologiasComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() titleProject: String = "";
  @Input() description: String = "";
  @Input() img:String = "";
  @Input() url:String = "";
}
