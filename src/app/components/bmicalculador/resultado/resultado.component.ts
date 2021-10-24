import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi: number;
  resultado: string;
  interpretacion: string;



  constructor(private router: Router,
              private route: ActivatedRoute) {
                console.log(route.snapshot.paramMap.get('valor'));
                this.resultado = '';
                this.interpretacion = '';
                this.bmi = +route.snapshot.paramMap.get('valor')!;

                
               }

  ngOnInit(): void {
    this.getResultado();
  }

  reCalcularBMI(){
    this.router.navigate(['inicio']);
  }

  getResultado(){
    if(this.bmi >=25){
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'Tienes un peso corporal superior al normal. Intente hacer mas ejercicio';
    }else if(this.bmi >=18.5){
      this.resultado = 'Peso Normal';
      this.interpretacion = 'Tienes un peso corporal normal. Buen Trabajo!';
    }else{
      this.resultado = 'Bajo Peso';
      this.interpretacion = 'Tienes un peso corporal mas bajo de lo normal. Puedes comer un poco mas Porfavor?';

    }

  }


}
