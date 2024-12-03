import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Card, Role, User } from '../interfaces/game.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _nameGame : string = 'Sprint 32';
  private _nameUser : string = 'Juan pablo';
  private _roleUser : Role = 'playerOwner';

  private cardSubject = new BehaviorSubject<Card>({score: ''}); 
  cardScore$ = this.cardSubject.asObservable();

  constructor(private http: HttpClient ) { 
   
   }

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

  setRoleUser(roleUser: Role) {
    this._roleUser = roleUser;
  }

  get roleUser () {
    return this._roleUser;
  }

  setCartScore(card: Card) {
    this.cardSubject.next(card);
  }

  getUsersGame() : Observable<User[]>{
    return this.http.get<{ users: User[] }>('/../assets/files/users.json').pipe(
      map((response) =>
        response.users
      )
    )
  }

}
