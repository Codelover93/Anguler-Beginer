import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {
  resulrform: FormGroup;
  ben;eng;math;phs;chm;
  constructor( private fb:FormBuilder, private router:Router) {
    this.resulrform=fb.group({
      "ben":[''],
      "eng":[''],
      "math":[''],
      "phs":[''],
      "chm":['']
    });
   }

  ngOnInit(): void {
  }

  formsubmit(){
    //console.log(this.resulrform.controls.ben.value);
    this.ben=this.resulrform.controls.ben.value;
    this.eng=this.resulrform.controls.eng.value;
    this.math=this.resulrform.controls.math.value;
    this.phs=this.resulrform.controls.phs.value;
    this.chm=this.resulrform.controls.chm.value;
    this.router.navigate(['/marks'+'/'+this.ben+'/'+this.eng+'/'+this.math+'/'+this.phs+'/'+this.chm]);
  }

}
