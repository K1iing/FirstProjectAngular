import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3',
  imports: [],
  templateUrl: './componente3.component.html',
  styleUrl: './componente3.component.scss'
})
export class Componente3Component {
imagem:string = './assets/anime2.jpg'

alterarImagem() {
  if(this.imagem === './assets/anime2.jpg') {
    this.imagem = './assets/anime1.jpg';
  }
  else {
    this.imagem = './assets/anime2.jpg';
  }

}
}
