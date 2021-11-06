import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-noticias',
  templateUrl: './nav-noticias.component.html',
  styleUrls: ['./nav-noticias.component.css']
})
export class NavNoticiasComponent implements OnInit {
  @Input() titulo: string;

  constructor() {
    this.titulo = '';
   }

  ngOnInit(): void {
  }

}
