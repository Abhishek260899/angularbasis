import { Component, OnInit } from '@angular/core';
import {IModule} from 'src/shared/Interfaces'
import {DataService} from 'src/core/data.service'
@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.css']
})
export class ModComponent implements OnInit {
  mod1:IModule[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getModules()
    .subscribe((customers: IModule[]) => this.mod1 = customers);
  }
   

}
