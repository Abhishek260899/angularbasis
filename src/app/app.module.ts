// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ModModule} from 'C:/Users/Abhishek Mehta/angularbasis/src/app/mod/mod.modules';
import {CoreModule} from 'src/core/core.module';
import { LessonModule } from 'src/les/les.modules'
import {CardModule} from 'src/cards/cards.modules'


@NgModule({
  declarations: [
    AppComponent,
    
    
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    ModModule,
    CoreModule,
    LessonModule,
    CardModule,
    // NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
