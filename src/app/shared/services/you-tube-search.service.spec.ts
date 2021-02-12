import { TestBed } from '@angular/core/testing';

import { YouTubeSearchService } from './you-tube-search.service';

describe('YouTubeSearchService', () => {
  let service: YouTubeSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YouTubeSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
