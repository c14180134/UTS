import { TestBed } from '@angular/core/testing';

import { GlobalfotoService } from './globalfoto.service';

describe('GlobalfotoService', () => {
  let service: GlobalfotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalfotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
