import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import {  ILessons, IModule } from 'src/shared/Interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './les.html',

})
export class LessonComponent implements OnInit {

  Lesson: IModule[] = [];
  

  constructor(private dataService: DataService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getModules().subscribe((les: IModule[]) => {
      this.Lesson = les;
    });

  }

}