import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RuteoService } from 'src/app/services/ruteo.service';

@Component({
  selector: 'app-user-ruteo',
  templateUrl: './user-ruteo.component.html',
  styleUrls: ['./user-ruteo.component.css']
})
export class UserRuteoComponent implements OnInit {
  id: number;
  loading = true;


  constructor(private aRoute: ActivatedRoute,
              private  userService:  RuteoService) { 

    this.id = +this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    console.log(this.id);
    this.getUser();
    
  }
  getUser():void{
    this.userService.getUser(this.id).subscribe(data =>{
      console.log(data);
      this.loading = false;
    });
  }

}
