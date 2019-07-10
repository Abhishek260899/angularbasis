import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { CommonModule } from '@angular/common';

import {CardComponent} from './cards.component'
import {CoreModule} from 'src/core/core.module'
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@NgModule({
  imports:      [ CommonModule, FormsModule,CoreModule,  SwiperModule, NgbModule  ],
  declarations: [ CardComponent],
  exports: [ CardComponent ],
  
})
export class CardModule { }