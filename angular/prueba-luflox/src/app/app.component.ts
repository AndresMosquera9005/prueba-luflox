import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PruebaSolucionComponent } from "./components/prueba-solucion/prueba-solucion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PruebaSolucionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba-luflox';
}
