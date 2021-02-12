import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { SearchResults } from 'src/app/shared/models/search-result.model';
import { YouTubeSearchService } from 'src/app/shared/services/you-tube-search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResults[]> = new EventEmitter<SearchResults[]>();

  constructor(private youtubeService: YouTubeSearchService, private el: ElementRef) { }

  ngOnInit(): void {
    // convert the `keyup` event into an observable stream 
    fromEvent(this.el.nativeElement, 'keyup').pipe(map((e: any) => e.target.value),
      // if character length greater then 1
      filter((text: string) => text.length > 1),
      // Time in milliseconds between key events
      debounceTime(250),
      // If previous query is diffent from current   
      distinctUntilChanged()
    ).subscribe(query => {
      console.log(query);
      this.loading.emit(true);
      this.youtubeService.search(query).subscribe((result: SearchResults[]) => {
        this.loading.emit(false);
        this.results.emit(result);
        console.log(result);
      },
        (err: any) => { // on error 
          console.log(err); this.loading.emit(false);
        },
        () => { // on completion
          console.info("Result Fetched!!");
          this.loading.emit(false);
        }
      );
    })

  }

}
