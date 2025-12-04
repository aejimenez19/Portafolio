import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-badge.component.html',
  styleUrl: './tech-badge.component.css'
})
export class TechBadgeComponent {
  @Input() title: string = "";
}

