import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {
  @Input() user: any;
  // imgUrl : string;
  // imgUrl : string;
  name!: string;
  email!: string;
  id!: number;


  constructor() { }

  ngOnInit(): void {
    this.id = this.user.id;
    this.name = this.user.name;
    this.email = this.user.email;
    // this.imgUrl = this.user.imgUrl;
    
  }

}
