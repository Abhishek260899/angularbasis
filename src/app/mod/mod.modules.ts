import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ModRoutingModule} from 'C:/Users/Abhishek Mehta/angularbasis/src/app/mod/mod.routing' 
import {ModComponent} from 'C:/Users/Abhishek Mehta/angularbasis/src/app/mod/mod.component'
import {CoreModule} from 'src/core/core.module'
@NgModule({
  imports:      [ CommonModule, FormsModule,ModRoutingModule,CoreModule  ],
  declarations: [ ModComponent],
  exports: [ ModComponent ]
})
export class ModModule { }