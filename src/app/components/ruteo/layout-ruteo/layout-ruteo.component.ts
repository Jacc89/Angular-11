import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-ruteo',
  templateUrl: './layout-ruteo.component.html',
  styleUrls: ['./layout-ruteo.component.css']
})
export class LayoutRuteoComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  irDashboard():void{
    // guardar datos enviados.

    // rediereccion
    this.route.navigate(['/dashboard']);
  }

}
