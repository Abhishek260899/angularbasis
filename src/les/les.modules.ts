import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { LessonComponent } from './les.components';
import { LessonRouting } from './les.routing';


@NgModule({
    imports: [ CommonModule, FormsModule,LessonRouting ],
    declarations: [ LessonComponent ]
})
export class LessonModule { }