import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchResults } from '../models/search-result.model';
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class YouTubeSearchService {

  constructor(private http: HttpClient) { }

  search(query: string): Observable<SearchResults[]> {
    const params: string = [
      `q=${query}`,
      `key=${environment.YOUTUBE_API_KEY}`,
      `part=snippet`,
      `type=video`,
      `maxResults=12`
    ].join('&');

    const queryUrl = `${environment.lYOUTUBE_API_URL}?${params}`;

    return this.http.get(queryUrl).pipe(map((response: any) => {
      console.log(response);
      //  convert the response to json inorder to make ts know it has items
      return (<any>response).items.map((item: any) => {

        return new SearchResults({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description, thumbnailUrl: item.snippet.thumbnails.high.url
        });
      })
    }))
  }
}
