import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  data: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.apiService.getAllPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getByName() {
    this.apiService.getByName().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getMatchesGraterThan10() {
    this.apiService.getMatchesGraterThan10().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getRunsGraterThan400() {
    this.apiService.getRunsGraterThan400().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getFiftiesGraterThan2() {
    this.apiService.getFiftiesGraterThan2().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayersHighestFifties() {
    this.apiService.getPlayersHighestFifties().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  DeletePlayer(data: any) {
    let body = {
      _id: data,
    };
    this.apiService.deletePlayer(body).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  onOptionsSelected(value: string) {
    if (value === 'get-by-name') {
      this.getByName();
    } else if (value === 'get-matches-grater-than-10') {
      this.getMatchesGraterThan10();
    } else if (value === 'get-runs-grater-than-400') {
      this.getRunsGraterThan400();
    } else if (value === 'get-fifties-grater-than-2') {
      this.getFiftiesGraterThan2();
    } else if (value === 'get-players-highest-fifties') {
      this.getPlayersHighestFifties();
    } else {
      this.getAllData();
    }
  }
  deletePlayer(id: string) {
    this.DeletePlayer(id);
  }
}
