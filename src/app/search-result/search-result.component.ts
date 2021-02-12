import { Component, Input, OnInit } from '@angular/core';
import { SearchResults } from '../shared/models/search-result.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input()
  result!: SearchResults;

  constructor() { }

  ngOnInit(): void {
  }

}
