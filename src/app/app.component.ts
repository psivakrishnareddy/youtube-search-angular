import { Component } from '@angular/core';
import { SearchResults } from './shared/models/search-result.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'YoutubeSearchAPP';
  loading: boolean = false;
  results!: SearchResults[];
  constructor() {

  }
  updateResults(data: any) {
    this.results = data;
  }
  setLoader(isLoading: boolean) {
    this.loading = isLoading;
    console.log(this.loading);
  }
}
