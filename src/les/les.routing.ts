import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LessonComponent } from './les.components';

const routes: Routes = [
    { path: 'lessons/:id', component: LessonComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ], 
    exports: [ RouterModule ]
})
export class LessonRouting {

}