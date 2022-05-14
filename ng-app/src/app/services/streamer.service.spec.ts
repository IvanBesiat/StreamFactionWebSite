import { TestBed } from '@angular/core/testing';

import { StreamerSvcService } from './streamer.service';

describe('StreamerSvcService', () => {
  let service: StreamerSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreamerSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
