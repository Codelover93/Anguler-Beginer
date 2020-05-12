import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {
  ben;eng;math;phs;chm;total;average
  constructor(private actr:ActivatedRoute) {
    actr.paramMap.subscribe(
      (rspns:ParamMap)=>{
        this.ben=rspns.get('ben');
        this.eng=rspns.get('eng');
        this.math=rspns.get('math');
        this.phs=rspns.get('phs');
        this.chm=rspns.get('chm');
      }
    );
      this.total=parseInt(this.ben)+parseInt(this.eng)+parseInt(this.math)+parseInt(this.phs)+parseInt(this.chm);
      this.average=(this.total/5);
   }

  ngOnInit(): void {
  }

}
