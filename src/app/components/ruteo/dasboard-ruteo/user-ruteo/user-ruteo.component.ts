import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RuteoService } from 'src/app/services/ruteo.service';

@Component({
  selector: 'app-user-ruteo',
  templateUrl: './user-ruteo.component.html',
  styleUrls: ['./user-ruteo.component.css']
})
export class UserRuteoComponent implements OnInit {
  id!: number;
  loading = true;
  name!: string;
  email!: string;
  gender!: string;
  status!: string;



  constructor(private aRoute: ActivatedRoute,
              private  userService:  RuteoService) { 

  //   const newLocal = this.aRoute.snapshot.paramMap.get('id');
  //   this.id = +newLocal;
 }

  ngOnInit(): void {
    // console.log(this.id);
    this.getUser();
    
  }
  getUser():void{
    this.userService.getUser(this.id).subscribe(data =>{
      console.log(data);
      this.name = data.data.name;
      this.email = data.data.email;
      this.gender = data.data.gender;
      this.status = data.data.status;
      this.loading = false;
    });
  }

}
