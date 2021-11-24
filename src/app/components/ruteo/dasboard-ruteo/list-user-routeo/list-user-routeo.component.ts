import { Component, OnInit } from '@angular/core';
import { RuteoService } from 'src/app/services/ruteo.service';

@Component({
  selector: 'app-list-user-routeo',
  templateUrl: './list-user-routeo.component.html',
  styleUrls: ['./list-user-routeo.component.css']
})
export class ListUserRouteoComponent implements OnInit {
  listUser: any[] = [];
  loading= true;

  constructor( private _ruteoServices: RuteoService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser():void{
    this._ruteoServices.getUsers().subscribe(result =>{
      console.log(result.id);
      this.listUser = result.data.id;
      this.loading = false;
      
    })
  }

}
