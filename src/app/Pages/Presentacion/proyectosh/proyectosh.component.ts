import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-proyectosh',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './proyectosh.component.html',
  styleUrl: './proyectosh.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProyectoshComponent {

}
