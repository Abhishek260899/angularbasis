import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import {  ILessons } from 'src/shared/Interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: [ './orders.component.css' ]
})
export class LessonComponent implements OnInit {

  Lesson: ILessons[] = [];
  

  constructor(private dataService: DataService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getOrders(id).subscribe((les: ILessons[]) => {
      this.Lesson = les;
    });

  }

}