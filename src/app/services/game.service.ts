import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _nameGame : string = '';
  private _nameUser : string = '';
  private _roleUser : 'player' | 'viewer' | string = '';
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
}
