import { Component, OnInit } from '@angular/core';
import {IModule,Iresults} from 'src/shared/Interfaces'
import {DataService} from 'src/core/data.service'
import { groupBy } from 'lodash'

@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.css']
})
export class ModComponent implements OnInit {
  mod1:any;
  id1:number;
  mod2: any;
  temp: any;
  id2:number;
  mod3:any;
  temp2:any;
  showresult:boolean=false;
  constructor(private dataService: DataService) { }
 onClick(event){
  this.id1=event.target.id.toString();
  this.temp = this.mod2[this.id1][0];
  this.mod3=groupBy(this.temp.lessons,'_id');
  this.showresult=true;
 }
 onLessonClick(event){
 this.id2=event.target.id.toString();
 
 }
  ngOnInit() {
    this.dataService.getModules()
    .subscribe((customers: any) =>
    { 
      this.mod1 = customers
      this.check();
    
    });
  }

  check() {
    this.mod2 = groupBy(this.mod1.results.modules,'_id');
    console.log('hello');
  }
  
    
  
  // temp2 = groupBy(this.mod1.results.modules,'_id');

}
