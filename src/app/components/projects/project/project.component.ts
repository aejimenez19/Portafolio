import { Component, Input } from '@angular/core';
import { TechBadgeComponent } from '../../utils/tech-badge/tech-badge.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [TechBadgeComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() titleProject: String = "";
  @Input() description: String = "";
  @Input() img:String = "";
  @Input() url:String = "";
}
