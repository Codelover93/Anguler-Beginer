import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { NcfComponent } from './ncf/ncf.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';

import { RouterModule} from '@angular/router';
import { ScoreComponent } from './score/score.component';
import { ResultComponent } from './result/result.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FromComponent } from './from/from.component';
import { MarksComponent } from './marks/marks.component';
import { EvenoddPipe } from './evenodd.pipe';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { SubmitedformComponent } from './submitedform/submitedform.component';
import { PalindromComponent } from './palindrom/palindrom.component'

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    NcfComponent,
    Page3Component,
    Page4Component,
    ScoreComponent,
    ResultComponent,
    FromComponent,
    MarksComponent,
    EvenoddPipe,
    FormvalidationComponent,
    SubmitedformComponent,
    PalindromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
