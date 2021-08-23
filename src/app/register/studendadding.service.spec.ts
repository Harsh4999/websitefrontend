import { TestBed } from '@angular/core/testing';

import { StudendaddingService } from './studendadding.service';

describe('StudendaddingService', () => {
  let service: StudendaddingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudendaddingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
