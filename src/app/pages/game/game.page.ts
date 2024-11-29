import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/game.interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  
  card : Card = {
    score: '0',
  }; 

  constructor( public gameService: GameService) {
    this.gameService.cardScore$.subscribe( (card: Card) => {
      this.card = card;
      console.log(card.score);
    })
  }

  ngOnInit() {
  }

}
