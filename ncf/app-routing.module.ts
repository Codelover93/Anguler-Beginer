import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { NcfComponent } from './ncf/ncf.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { ScoreComponent } from './score/score.component';
import { ResultComponent } from './result/result.component';
import { FromComponent } from './from/from.component';
import { MarksComponent } from './marks/marks.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { SubmitedformComponent } from './submitedform/submitedform.component';
import { PalindromComponent } from './palindrom/palindrom.component';


const routes: Routes = [
  {
    path:'',
    component:FromComponent
  },
  {
    path:'page',
    component:Page1Component
  },
  {
    path:'page2',
    component:Page2Component
  },
  {
    path:'page3',
    component:Page3Component
  },
  {
    path:'page3/page4',
    component:Page4Component
  },
  {
    path:'scores',
    component:ScoreComponent
  },
  {
    path:'results/:totalsubject/:totalscores/:avarage',
    component:ResultComponent
  },
  {
    path:'marks',
    component:MarksComponent
  },
  {
    path:'marks/:ben/:eng/:math/:phs/:chm',
    component:MarksComponent
  },
  {
    path:'formvalidation',
    component:FormvalidationComponent
  },
  {
    path:'submitedform',
    component:SubmitedformComponent
  },
  {
    path:'submitedform/:name/:email/:phone/:password',
    component:SubmitedformComponent
  },
  {
    path:'leapyer',
    component:PalindromComponent
  },
  {
    path:'**',
    component:NcfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
