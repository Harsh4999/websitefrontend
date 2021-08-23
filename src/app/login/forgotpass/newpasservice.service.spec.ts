import { TestBed } from '@angular/core/testing';

import { NewpasserviceService } from './newpasservice.service';

describe('NewpasserviceService', () => {
  let service: NewpasserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewpasserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
