import { Component } from '@angular/core';
import {CardService} from "../../services/card.service";
import {Card} from "../../interfaces/card.interface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  cards: Card[] = [];
  constructor(private cardService: CardService) {
  }
  ngOnInit(): void {
    this.cardService.getCards().subscribe(res =>{
        console.log(res);
        this.cards = res;
    });
  }
}
