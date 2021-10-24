import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  dadoizq = "../../../assets/dados/dice1.png";
  dadoder = "../../../assets/dados/dice4.png";

  numero1 = 1;
  numero2 = 2;

  constructor() { }

  ngOnInit(): void {
  }

  tirarDados(){

    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;
    this.dadoizq = '../../../assets/dados/dice' + this.numero1 + '.png';
    this.dadoder = '../../../assets/dados/dice' + this.numero2 + '.png';
    console.log(this.numero1);
    console.log(this.numero2);
  }
  }


