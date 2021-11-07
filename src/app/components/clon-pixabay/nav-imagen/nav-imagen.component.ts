import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-imagen',
  templateUrl: './nav-imagen.component.html',
  styleUrls: ['./nav-imagen.component.css']
})
export class NavImagenComponent implements OnInit {
  @Input() titulo: string;

  constructor() {
    this.titulo = '';
  }

  ngOnInit(): void {
  }

}
