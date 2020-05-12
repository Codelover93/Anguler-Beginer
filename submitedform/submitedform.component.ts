import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-submitedform',
  templateUrl: './submitedform.component.html',
  styleUrls: ['./submitedform.component.css']
})
export class SubmitedformComponent implements OnInit {
  name;email;phone;password;
  constructor(private acrt: ActivatedRoute) {
    acrt.paramMap.subscribe(
      (rspnc:ParamMap)=>{
        this.name=rspnc.get('name');
        this.email=rspnc.get('email');
        this.phone=rspnc.get('phone');
        this.password=rspnc.get('password');
      }
    );
   }

  ngOnInit(): void {
  }

}
