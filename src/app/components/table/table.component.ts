import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/game.interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  users: User[] = [];
  user: User = {
    id: 0,
    name: '',
    score: 0,
    role: 'player',
  };

  constructor(private gameService: GameService) { }

  async ngOnInit() {
    await this.getUsersToGame();
    this.addUserToListGame();
    
  }

  getAcronyNameUser(name: string): string {
    if (!name) return 'EX';
    let nameCapitalized = '';
    const nameUserSplit = name.split(' ');

    if (nameUserSplit.length >= 2) {
      nameCapitalized = nameUserSplit[0].charAt(0) + nameUserSplit[1].charAt(0);
    } else {

      nameCapitalized = name.length > 1
        ? name.substring(0, 2)
        : name.substring(0, 1);
    }
    return nameCapitalized;
  }

  getUsersToGame() {
    return new Promise<void>((resolve, reject) => {
      this.gameService.getUsersGame().subscribe((users: User[]) => {
        this.users = users.map((_user: User) => {
          return _user
        });
        resolve();
      });
    });
  }

  addUserToListGame() {
    const idUser = this.users.length + 1;
    const nameUser = this.gameService.nameUser;
    const roleUser = this.gameService.roleUser;

    this.user = {
      id: idUser,
      score: 0,
      name: nameUser,
      role: roleUser,
    }

    this.users.push(this.user);
  }

}
