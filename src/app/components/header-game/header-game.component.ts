import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-header-game',
  templateUrl: './header-game.component.html',
  styleUrls: ['./header-game.component.scss'],
})
export class HeaderGameComponent implements OnInit {

  constructor(public gameService: GameService) {
  }


  ngOnInit() {
  }

  getAcronyNameUser(): string {
    if (!this.gameService.nameUser) return 'EX';
    let nameCapitalized = '';
    const nameUserSplit = this.gameService.nameUser.split(' ');

    if (nameUserSplit.length >= 2) {
      nameCapitalized = nameUserSplit[0].charAt(0) + nameUserSplit[1].charAt(0);
    } else {
      
      nameCapitalized = this.gameService.nameUser.length > 1 
        ?  this.gameService.nameUser.substring(0,2)
        :  this.gameService.nameUser.substring(0,1) ;
    }
    return nameCapitalized;
  }

}
