import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { CommonModule } from '@angular/common';

import {CardComponent} from './cards.component'
import {CoreModule} from 'src/core/core.module'
@NgModule({
  imports:      [ CommonModule, FormsModule,CoreModule  ],
  declarations: [ CardComponent],
  exports: [ CardComponent ]
})
export class CardModule { }