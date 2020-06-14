import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote:Quote[];
  toggleDetail(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete  this Quote for  ${this.quote[index].name}?`)
      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }
  constructor(){
    this.quote=[
      new Quote (1,'John wanderi' ,'"You’re only here for a short visit. Don’t hurry, don’t worry. And be sure to smell the flowers along the way."','Catherine',new Date(2003,4)),
      new Quote (2,'Jeff Koinange','"A man who dares to waste one hour of time has not discovered the value of life."','Blessing',new Date(2016,6)),
      new Quote (3,'Brio njeri','"If life were predictable it would cease to be life, and be without flavor."','Favour',new Date(2018,11)),
      
      new Quote (4,'Total Man','"All of life is peaks and valleys. Don’t let the peaks get too high and the valleys too low."','Catherine',new Date(2015,7)),
      new Quote (5,'Stone Jiwe','"Find ecstasy in life; the mere sense of living is joy enough."','Catherine',new Date(2016,8)),
      ];
  }
  addNewQuote(quote){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.completeDnewate = new Date(quote.completeDate)
    this.quote.push(quote)
  }
  ngOnInit() {
  }
}