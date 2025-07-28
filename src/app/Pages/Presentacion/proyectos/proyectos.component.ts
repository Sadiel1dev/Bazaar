import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProyectosComponent {

}
