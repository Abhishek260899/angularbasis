import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import {SharedModule} from 'src/shared/shared.modules'

@NgModule({
    imports: [ HttpClientModule,SharedModule ],
    providers: [ DataService ],
    
})
export class CoreModule { }