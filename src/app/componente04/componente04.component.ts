import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente04',
  imports: [CommonModule],
  templateUrl: './componente04.component.html',
  styleUrl: './componente04.component.scss'
})
export class Componente04Component {
  exibir:boolean = true;
alterarEstado() {
 this.exibir = !this.exibir;
}


}
