import { Component, OnInit,Input, OnChanges } from '@angular/core';
import {IModule,Iresults} from 'src/shared/Interfaces'
import {DataService} from 'src/core/data.service'
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'card-mod',
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
  providers: [NgbCarouselConfig] 
})
export class CardComponent implements OnChanges {
    showNavigationArrows = false;
    showNavigationIndicators = false;
    card1:any;
    card2:any;
    checkImages:boolean;
    @Input() get cardarr(){
        return this.card1;
    }
    set cardarr(value:any){
        if(value){
            this.card1=value;
        }
    }
    constructor(private dataService: DataService,config: NgbCarouselConfig){
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
         this.checkImages=false;
    }
    images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  img="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1324706/300/200/m1/fpc/wm0/sndag3kexsjoocoq96vyioo5ylrgjohbozun4hy6smnvqey2qj3httfwdmluhybn-.jpg?1464696926&s=d98a47752c1f55efa18c0876e72c0543";
    ngOnChanges(){
        this.checkImages = true;
        this.dataService.getCards(this.card1)
        .subscribe((customers: any) =>
        { 
          this.card2= customers
          
        
        });
        
    }
}