import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public addPlayer(body: any) {
    return this.http.post('http://localhost:3000/add-player', body);
  }
  public updatePlayer(body: any) {
    return this.http.post('http://localhost:3000/update-player', body);
  }
  public findPlayer(body: any) {
    return this.http.post('http://localhost:3000/find-player', body);
  }
  public deletePlayer(body: any) {
    return this.http.post('http://localhost:3000/delete-player', body);
  }
  public getAllPlayers() {
    return this.http.get('http://localhost:3000/find-all-players');
  }
  public getByName() {
    return this.http.get('http://localhost:3000/get-by-name');
  }
  public getMatchesGraterThan10() {
    return this.http.get('http://localhost:3000/get-matches-grater-than-10');
  }
  public getRunsGraterThan400() {
    return this.http.get('http://localhost:3000/get-runs-grater-than-400');
  }
  public getFiftiesGraterThan2() {
    return this.http.get('http://localhost:3000/get-fifties-grater-than-2');
  }
  public getPlayersHighestFifties() {
    return this.http.get('http://localhost:3000/get-players-highest-fifties');
  }
}
