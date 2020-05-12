import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(private router:Router) { }
  totalsubject=5;
  totalscores=375;
  avarage=75;
  ngOnInit(): void {
  }
  getresult(totalsubject,totalscores,avarage){
    this.router.navigate(['/results'+'/'+totalsubject+'/'+totalscores+'/'+'/'+avarage]);
  }
}
