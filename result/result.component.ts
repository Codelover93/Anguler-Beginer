import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  totalsubject;
  totalscores;
  avarage;
  constructor(private router:Router, private actr:ActivatedRoute) { 
    actr.paramMap.subscribe(
      (rse:ParamMap)=>{
        this.totalsubject=rse.get('totalsubject');
        this.totalscores=rse.get('totalscores');
        this.avarage=rse.get('avarage');
      }
    );
  }

  ngOnInit(): void {
  }

}
