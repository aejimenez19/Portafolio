import { Component } from '@angular/core';
import { TitleComponent } from '../utils/title/title.component';

@Component({
  selector: 'app-contacs',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './contacs.component.html',
  styleUrl: './contacs.component.css'
})
export class ContacsComponent {

}
