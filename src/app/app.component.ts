import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente01Component } from "./componente01/componente01.component";
import { Componente02Component } from "./componente02/componente02.component";
import { Componente3Component } from "./componente3/componente3.component";
import { Componente04Component } from "./componente04/componente04.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componente01Component, Componente02Component, Componente3Component, Componente04Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clubservice';
}
