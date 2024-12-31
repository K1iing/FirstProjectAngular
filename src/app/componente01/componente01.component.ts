import { Component } from '@angular/core';

@Component({
  selector: 'app-componente01',
  imports: [],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.scss'
})
export class Componente01Component {
  //variaveis
  nome:string = 'João';

  idade:number = 18;

  nomeCachorro:string = "Kyra";

  idadeCachorro:number = 3;

}
