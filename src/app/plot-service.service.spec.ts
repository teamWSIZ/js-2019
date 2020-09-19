import { TestBed } from '@angular/core/testing';

import { PlotServiceService } from './plot-service.service';

describe('PlotServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlotServiceService = TestBed.get(PlotServiceService);
    expect(service).toBeTruthy();
  });
});
