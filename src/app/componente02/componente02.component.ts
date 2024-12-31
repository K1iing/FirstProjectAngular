import { Component } from '@angular/core';

@Component({
  selector: 'app-componente02',
  imports: [],
  templateUrl: './componente02.component.html',
  styleUrl: './componente02.component.scss'
})
export class Componente02Component {

  //funcao para exibir uma mensagem
  mensagem(){
    alert("Hello World");
  }
}
