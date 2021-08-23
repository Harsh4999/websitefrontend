import { TestBed } from '@angular/core/testing';

import { LoggedserviceService } from './loggedservice.service';

describe('LoggedserviceService', () => {
  let service: LoggedserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
