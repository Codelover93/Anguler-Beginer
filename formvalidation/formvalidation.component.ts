import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {
  frmvlidgrp:FormGroup; allfieldblank;namerror;emailerror;phnerror;passerror;
  name;email;phone;password;
  checkfrmfield;chkclk=0;
  constructor(private fvb:FormBuilder, private router:Router) { 
    this.frmvlidgrp=fvb.group(
      {
        "name":['',[Validators.required, Validators.pattern("^[A-Za-z ]+$")]],
        "email":['',[Validators.required, Validators.pattern("^[a-z0-9_.+-]+@[a-z0-9-]+\\.[a-z]{2,4}$")]],
        "phn":['',[Validators.required, Validators.pattern("^[0-9]{10}$")]],
        "pass":['',[Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]]
        //"pass":['',[Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
      }
    );
  }

  ngOnInit(): void {
  }

  submit(){
  //console.log(this.frmvlidgrp.controls.phn);
  this.chkclk++;
    if(this.frmvlidgrp.valid==false){
      if(this.frmvlidgrp.controls.name.valid==false){
        this.namerror="Please enter a valid name.";

      }else{
        this.namerror="";
      }
      if(this.frmvlidgrp.controls.email.valid==false){
        this.emailerror="Please enater a valid email address.";
      }else{
        this.emailerror="";
      }
      if(this.frmvlidgrp.controls.phn.valid==false){
        this.phnerror="Please enter a valid phone number.";
      }else{
        this.phnerror="";
      }
      if(this.frmvlidgrp.controls.pass.valid==false){
        this.passerror="Please enter a valid password.";
      }else{
        this.passerror="";
      }
    }else{
      this.name=this.frmvlidgrp.controls.name.value;
      this.email=this.frmvlidgrp.controls.email.value;
      this.phone=this.frmvlidgrp.controls.phn.value;
      this.password=this.frmvlidgrp.controls.pass.value;
      this.router.navigate(['/submitedform'+'/'+this.name+'/'+this.email+'/'+this.phone+'/'+this.password]);
    }
  }

  checking(frmname,checkclick){
    if(checkclick>0){
      if(frmname=='name'){
        if(this.frmvlidgrp.controls.name.valid==false){
          this.namerror="Please enter a valid name.";
        }else{
          this.namerror="";
        }
      }else if(frmname=='email'){
        if(this.frmvlidgrp.controls.email.valid==false){
          this.emailerror="Please enater a valid email address.";
        }else{
          this.emailerror="";
        }
      }else if(frmname=='phn'){
        if(this.frmvlidgrp.controls.phn.valid==false){
          this.phnerror="Please enter a valid phone number.";
        }else{
          this.phnerror="";
        }
      }else{
        if(this.frmvlidgrp.controls.pass.valid==false){
          this.passerror="Please enter a valid password.";
        }else{
          this.passerror="";
        }
      }
    }
  }

}
