import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModComponent } from 'C:/Users/Abhishek Mehta/angularbasis/src/app/mod/mod.component';

const routes: Routes = [
    { path: 'modules', component: ModComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ], 
    exports: [ RouterModule ]
})
export class ModRoutingModule {

}