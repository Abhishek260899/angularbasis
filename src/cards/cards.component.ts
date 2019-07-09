import { Component, OnInit,Input, OnChanges } from '@angular/core';
import {IModule,Iresults} from 'src/shared/Interfaces'
import {DataService} from 'src/core/data.service'


@Component({
  selector: 'card-mod',
  templateUrl: './card.html',
  styleUrls: ['./card.css']
})
export class CardComponent implements OnChanges {
    card1:any;
    card2:any;
    @Input() get cardarr(){
        return this.card1;
    }
    set cardarr(value:any){
        if(value){
            this.card1=value;
        }
    }
    constructor(private dataService: DataService){
 
    }
    ngOnChanges(){
        this.dataService.getCards(this.card1)
        .subscribe((customers: any) =>
        { 
          this.card2= customers
          
        
        });
    }
}