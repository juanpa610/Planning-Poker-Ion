import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _nameGame : string = '';
  private _nameUser : string = '';
  private _roleUser : 'player' | 'viewer' | string = '';

  private cardSubject = new BehaviorSubject<Card>({score: ''}); 
  cardScore$ = this.cardSubject.asObservable();

  constructor() { }

  newGame(nameGame: string) {
    this._nameGame = nameGame;
  }

  get nameGame () {
    return this._nameGame;
  }
  setNameUser(nameUser: string) {
    this._nameUser = nameUser;
  }

  get nameUser () {
    return this._nameUser;
  }

  setRoleUser(roleUser: string) {
    this._roleUser = roleUser;
  }

  get roleUser () {
    return this._roleUser;
  }

  setCartScore(card: Card) {
    this.cardSubject.next(card);
  }

}
